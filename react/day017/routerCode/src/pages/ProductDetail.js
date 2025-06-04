import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();
  // console.log(params.id);

  return;

  <main>
    <div className="component">Product {params.id} - Product Detail</div>
  </main>;
};
