import { useMutation } from "@apollo/client";
import { useState } from "react";
import ProductWriteUi from "./write.presenter";
import { CREATE_USED_ITEM } from "./write.queries";

const ProductWrite = () => {
  const [prevImage, setPrevImage] = useState([]);
  const [uploadImage, setUploadImage] = useState([]);

  const [createBoard] = useMutation(CREATE_USED_ITEM);

  const onClickSubmit = () => {
    try {
      createBoard({
        variables: {},
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onChangeFiles = (event) => {
    console.log(event.target.files);

    const files = event.target.files;
    const readers = [];

    const fileReader = new FileReader();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileReader.onload = (data) => {
        console.log(data);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return <ProductWriteUi onChangeFiles={onChangeFiles} />;
};

export default ProductWrite;
