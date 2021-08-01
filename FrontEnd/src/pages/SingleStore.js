import React from "react";
import { useParams, Link } from "react-router";

const url = "src/data.json";
const SingleStore = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [store, setStore] = React.useState(null);

  //   if (data) {
  //     const {
  //       storeName: name,
  //       img: image,
  //       name1,
  //       price1,
  //       name2,
  //       price2,
  //     } = data[0];
  //     const foods = [name1, price1, name2, price2];

  //     const newStore = { name, image, foods };
  //     setStore(newStore);
  //   }
  React.useEffect(() => {
    setLoading(true);
    async function getStore() {
      try {
        // const data = require("../data.json");
        // console.log(data);

        const response = await fetch(`${url}${id}`);

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("help");
      }
    }
    getStore();
  }, [id]);

  //   if (!store) {
  //     return <h2>No Store to display</h2>;
  //   }
  // const { name, image, foods } = store;
  return (
    <section>
      <h1>aaaa </h1>
    </section>
  );
};

export default SingleStore;
