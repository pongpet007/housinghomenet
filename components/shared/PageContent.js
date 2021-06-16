import React from "react";
import { getPageOne } from "../../lib/api";
import parse from "html-react-parser";

const PageContent = ({ page_id }) => {
  const data = getPageOne(page_id);

  const xx = JSON.stringify(data);
  //   debugger;
  return (
    <div style={{ marginTop: 30 }}>
      {/* {xx} */}
      <h1>{data && data.page.name}</h1>
      <div>{data && parse(data.page.desc_long)}</div>
    </div>
  );
};

export default PageContent;
