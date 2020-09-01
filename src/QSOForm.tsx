import React, { FC, useState } from "react";
import { QSO, default_qso } from "./types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";
import styled from "styled-components";

export const QSOForm: FC<{
  className?: string;
  default_form_values?: Partial<QSO>;
  onCreate: (qso: QSO) => void;
}> = ({ className, default_form_values, onCreate }) => {
  const [current_qso, setCurrentQso] = useState<QSO>({
    ...default_qso,
    ...default_form_values,
  });
  return (
    <form className={className}>
      <TextField
        onChange={(e) =>
          setCurrentQso({ ...current_qso, call_sign: e.target.value })
        }
        label="CallSign"
      />
      <TextField
        label="Time"
        type="datetime-local"
        defaultValue={moment(current_qso.time).format().slice(0, -9)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField label="Report" />
      <TextField
        error={isNaN(current_qso.frequency)}
        label="Frequecy"
        onChange={(e) =>
          setCurrentQso({
            ...current_qso,
            frequency: e.target.value === "" ? 0 : parseInt(e.target.value),
          })
        }
      />
      <Button onClick={() => onCreate(current_qso)} variant="contained">
        CREATE
      </Button>
    </form>
  );
};

export const StyledQSOForm = styled(QSOForm)`
  > * {
    margin: 50px !important;
  }
`;

export default StyledQSOForm;
