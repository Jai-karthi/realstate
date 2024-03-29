import { useMemo } from "react";

const SellYourHomeContainer = ({ imageId, homeActionText, propWidth }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="w-[78px] relative h-[78px] overflow-hidden shrink-0"
          alt=""
          src={imageId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative text-5xl leading-[32px] font-semibold text-center">
            {homeActionText}
          </div>
          <div className="w-[268px] relative leading-[24px] text-lightslategray flex items-end">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className="relative leading-[24px] text-primary-500">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHomeContainer;
