import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={520}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="272" rx="10" ry="10" width="260" height="22" /> 
    <rect x="0" y="315" rx="10" ry="10" width="260" height="88" /> 
    <rect x="1" y="432" rx="10" ry="10" width="95" height="30" /> 
    <rect x="128" y="421" rx="25" ry="25" width="130" height="45" />
  </ContentLoader>
)

export default Skeleton