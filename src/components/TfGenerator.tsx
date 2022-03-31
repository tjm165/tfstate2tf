import { useState } from "react";
import Tf from "./Tf";
import samples from "./samples";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const TfGenerator = () => {
  const [value, setValue] = useState(samples.lambda);

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };

  const [sample, setSample] = useState("lambda");

  const handleSampleChange = (e: any) => {
    setSample(e.target.value);
    //@ts-ignore
    setValue(samples[e.target.value]);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="Full-width">
          <Typography color="white" variant="h4">
            <div style={{ display: "flex" }}>
              <div style={{ paddingLeft: "12px", paddingRight: "24px" }}>
                .tfstate
              </div>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Examples
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sample}
                    label="Examples"
                    onChange={handleSampleChange}
                  >
                    <MenuItem value={"lambda"}>AWS Lambda</MenuItem>
                    <MenuItem value={"s3"}>AWS S3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </Typography>
          <textarea
            className="terraformInput"
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <div className="Full-width">
          <Typography color="white" variant="h4">
            <div style={{ display: "flex" }}>
              <div style={{ paddingLeft: "12px", paddingRight: "24px" }}>
                .tf
              </div>
            </div>
          </Typography>

          <Tf tfState={value} />
        </div>
      </div>
    </div>
  );
};

export default TfGenerator;
