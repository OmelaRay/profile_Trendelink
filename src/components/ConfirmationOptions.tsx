import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";

export type ConfirmationOptionsType = {
  className?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ConfirmationOptions: FunctionComponent<ConfirmationOptionsType> = ({
  className = "",
  prop,
  propMinWidth,
}) => {
  const div16Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-t-none rounded-b-xl bg-gainsboro-100 flex flex-row items-start justify-between pt-[30px] px-11 pb-[33px] box-border max-w-full gap-5 z-[2] mq750:flex-wrap mq1050:pl-[22px] mq1050:pr-[22px] mq1050:box-border ${className}`}
    >
      <div className="h-[100px] w-[867px] relative rounded-t-none rounded-b-xl bg-gainsboro-100 hidden max-w-full" />
      <Button className="z-[3]" type="primary" />
      <Button className="z-[3]" type="primary" />
    </div>
  );
};

export default ConfirmationOptions;
