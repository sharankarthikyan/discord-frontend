import React from "react";

import { Separator, DateLabel } from "./date-seperator.styles";

const DateSeparator = ({ date }) => {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
};

export default DateSeparator;
