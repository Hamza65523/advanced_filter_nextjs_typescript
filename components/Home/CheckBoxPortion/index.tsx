import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { NextPage } from "next";
interface Props {
  cuision: any;
  changedCheckId: any;
}
const index: NextPage<Props> = ({ cuision, changedCheckId }) => {
  const { id, label, checked } = cuision;
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => changedCheckId(id)}
            size="small"
            checked={checked}
          />
        }
        label={label}
      />
    </div>
  );
};

export default index;
