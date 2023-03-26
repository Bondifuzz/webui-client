import { Col, Form, InputNumber, Row, Slider } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const { Item } = Form;

const SlidersDependentPredefined = ({
  setCPU,
  setRAM,
  previousValueCPU,
  previousValueRAM,
}) => {
  const { t } = useTranslation();
  const [valueCPU, setValueCPU] = useState(
    previousValueCPU ? previousValueCPU : 2
  );
  const [valueRAM, setValueRAM] = useState(
    previousValueRAM ? previousValueRAM : 2
  );
  const [possibleRAMValues, setPossibleRAMValues] = useState({
    range: {},
    min: 0,
    max: 0,
  });

  const dataCPU = {
    title: t("form.label.project.node_cpu"),
    measurments: "core",
    label: "node_cpu",
  };

  const dataRAM = {
    title: t("form.label.project.node_ram"),
    measurments: "GiB",
    label: "node_ram",
  };

  const marksObj = {
    2: " ",
    4: " ",
    6: " ",
    8: " ",
    10: " ",
    12: " ",
    14: " ",
    16: " ",
    20: " ",
    24: " ",
    28: " ",
    32: " ",
    36: " ",
    40: " ",
    44: " ",
    48: " ",
    52: " ",
    56: " ",
    60: " ",
    64: " ",
    68: " ",
    72: " ",
    76: " ",
    80: " ",
    84: " ",
    88: " ",
    92: " ",
    96: " ",
  };

  function calcRAM(newValue) {
    const memoryPerCore = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ];
    const ramPossible = memoryPerCore
      .map((coeff) => coeff * newValue)
      .filter((val) => val <= 640);

    const borders = [ramPossible[0], ramPossible[ramPossible.length - 1]];
    //setValueRAM(borders[0]);
    setPossibleRAMValues({
      min: borders[0],
      max: borders[1],
      range: ramPossible.reduce((a, v) => ({ ...a, [v]: " " }), {}),
    });
    return borders[0];
  }
  useEffect(() => {
    if (previousValueRAM) {
      calcRAM(valueCPU);
    } else {
      setValueRAM(calcRAM(valueCPU));
    }
    // setCPU(valueCPU);
    //setRAM(valueRAM);
  }, []);
  return (
    <Row gutter={12}>
      <Col span={12}>
        <Item label={`${dataCPU.title}(${dataCPU.measurments}):`} required>
          <InputNumber
            name={dataCPU.label}
            readOnly={true}
            //bordered={false}
            style={{
              width: "110px",
            }}
            value={valueCPU}
          />
        </Item>
        <Slider
          className="FlattenedSlider"
          style={{ width: "220px" }}
          onChange={(newValue) => {
            let newRam = calcRAM(newValue);
            setValueCPU(newValue);
            setValueRAM(newRam);
            setCPU(newValue);
            setRAM(newRam);
          }}
          value={typeof valueCPU === "number" ? valueCPU : 0}
          min={2}
          max={96}
          marks={marksObj}
          step={null}
        />
      </Col>

      <Col span={12}>
        <Item label={`${dataRAM.title}(${dataRAM.measurments}):`} required>
          <InputNumber
            name={dataRAM.label}
            style={{
              width: "110px",
            }}
            value={valueRAM}
            readOnly={true}
            //bordered={false}
          />
        </Item>
        <Slider
          className="FlattenedSlider"
          style={{ width: "220px" }}
          onChange={(newValue) => {
            setValueRAM(newValue);
            setRAM(newValue);
          }}
          value={typeof valueRAM === "number" ? valueRAM : 0}
          marks={possibleRAMValues.range}
          step={null}
          min={possibleRAMValues.min}
          max={possibleRAMValues.max}
        />
      </Col>
    </Row>
  );
};

export default SlidersDependentPredefined;
