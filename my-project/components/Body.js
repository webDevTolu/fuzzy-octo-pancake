// import AssetItem from "./AssetItem";
import logoImage from "../public/images/placeholder.svg";
// import { ASA_LIST } from "../queries/asaListQuery";
// import { useQuery } from "@apollo/client";
// import LoadingSpinner from "./UI/LoadingSpinner";
// import ErrorNotification from "./UI/ErrorNotification";
// import { Fragment } from "react";

import { gql } from "@apollo/client";
import client from "../apollo-client";

const Body = ({ asaList }) => {
  console.log(asaList)
  // const { loading, error, data } = useQuery(ASA_LIST);
  // if (loading) return <LoadingSpinner />;
  // if (error) return <ErrorNotification />;

  return (
    <div className="p-8 md:p-12 lg:p-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      Body
      {/* {!loading && !error && (
        <Fragment>
          {data.asalist.results.map((asset) => (
            <AssetItem
              key={asset.assetId}
              imageSrc={asset.logo ? asset.logo : logoImage}
              name={asset.name}
              availability={asset.available}
            />
          ))}
        </Fragment>
      )} */}
    </div>
  );
};

export default Body;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        asalist {
          results {
            assetId
            name
            available
            logo
          }
        }
      }
    `,
  });

  return {
    props: {
      asaList: data.asalist.results,
    },
  };
}
