import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete, Button } from "antd";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import Component5 from "../components/Component5";
import Component4 from "../components/Component4";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import ProfileHeader from "../components/ProfileHeader";

const Frame11: FunctionComponent = () => {
  return (
    <div className="w-full h-[1427px] relative bg-aliceblue-200 overflow-hidden flex flex-col items-end justify-start pt-[35px] pb-[50px] pl-[100px] pr-[101px] box-border gap-[358px] leading-[normal] tracking-[normal] mq450:gap-[89px] mq450:pl-5 mq450:pr-5 mq450:box-border mq700:h-auto mq700:gap-[179px] mq700:pl-[50px] mq700:pr-[50px] mq700:box-border">
      <main className="self-stretch flex flex-col items-end justify-start gap-[59px] shrink-0 max-w-full mq700:gap-[29px]">
        <section className="self-stretch h-[1251px] relative max-w-full text-left text-base text-white font-inter mq700:h-auto mq700:min-h-[1251]">
          <AutoComplete
            className="absolute top-[0px] left-[782px] z-[1]"
            style={{ width: 383 }}
          />
          <Component2
            propFlex="unset"
            propMinWidth="unset"
            propPosition="absolute"
            propTop="372px"
            propLeft="674px"
            propFlex1="unset"
            propMinWidth1="unset"
            group107="/group-107.svg"
          />
          <Component1
            propFlex="unset"
            propPosition="absolute"
            propTop="372px"
            propLeft="194px"
            propWidth="448px"
          />
          <Button
            className="absolute top-[628px] left-[194px] z-[1]"
            type="primary"
          />
          <Button
            className="absolute top-[628px] left-[380px] z-[1]"
            type="primary"
          />
          <Component5
            propLeft="566px"
            propBorder="1px solid #c0bebe"
            propBackgroundColor="unset"
            prop="Історії"
            propColor="#3c3c3c"
            propMinWidth="43px"
          />
          <Component5
            propLeft="752px"
            propBorder="1px solid #c0bebe"
            propBackgroundColor="unset"
            prop="Reels"
            propColor="#3c3c3c"
            propMinWidth="36px"
          />
          <Component5 prop="Залучення" />
          <div className="absolute top-[0px] left-[0px] w-[120px] h-[1100px] text-center font-logo-font">
            <Component4 />
            <a className="[text-decoration:none] absolute top-[52px] left-[33px] font-bold text-[inherit] inline-block w-[54px] h-[43px] z-[1]">
              <p className="m-0">Trend</p>
              <p className="m-0">Link</p>
            </a>
          </div>
          <FrameComponent1 />
          <div className="absolute top-[706px] left-[1029px] text-xs [text-decoration:underline] text-gray-100 inline-block min-w-[92px] z-[1]">
            Зберегти в PDF
          </div>
          <GroupComponent1 />
          <GroupComponent2 />
          <div className="absolute top-[742px] left-[822px] w-[299px] flex flex-row items-start justify-start text-main-black">
            <div className="h-[1368px] w-[1016px] absolute !m-[0] top-[-742px] left-[-673px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-21xl w-full h-full"
                alt=""
                src="/bg.svg"
              />
              <img
                className="absolute top-[706px] left-[863px] w-[15px] h-[15px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/-2-2.svg"
              />
            </div>
            <div className="flex-1 rounded-xl bg-aliceblue-200 flex flex-row items-start justify-start pt-[115px] px-[42px] pb-[114px] z-[1]">
              <div className="h-[509px] w-[299px] relative rounded-xl bg-aliceblue-200 hidden" />
              <div className="flex-1 flex flex-col items-start justify-start gap-10 z-[2]">
                <div className="self-stretch flex flex-col items-start justify-start gap-1">
                  <b className="self-stretch relative">0.79%</b>
                  <div className="relative text-sm">
                    Середній коефіцієнт залучення
                  </div>
                </div>
                <div className="w-[47px] flex flex-col items-start justify-start gap-1">
                  <b className="relative inline-block min-w-[47px] whitespace-nowrap">
                    $0.93
                  </b>
                  <div className="self-stretch relative text-sm">CPE</div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <b className="relative inline-block min-w-[32px]">1.5k</b>
                    <img
                      className="h-[15px] w-[15px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/actions--toggle--favorite--24@2x.png"
                    />
                  </div>
                  <div className="relative text-sm">
                    Середня кількість лайків
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <b className="relative inline-block min-w-[30px]">814</b>
                    <img
                      className="h-[15px] w-[15px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/actions--operations--chat--24@2x.png"
                    />
                  </div>
                  <div className="relative text-sm tracking-[-0.01px]">
                    Середня кількість коментарів
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[1018px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-8 w-8 relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/actions--navigation--chevronleft--34@2x.png"
          />
        </div>
      </main>
      <ProfileHeader
        groupDivLeft="unset"
        groupDivTop="70px"
        groupDivRight="146px"
        profilePicture="/ellipse-1@2x.png"
        group95="/group-95.svg"
        divTextDecoration="unset"
        editButtonBorderRadius="40px"
        editButtonBackgroundColor="#009ea0"
        editButtonOverflow="hidden"
        editButtonDisplay="flex"
        editButtonFlexDirection="row"
        editButtonPadding="10px 56px"
      />
      <div className="w-[1074px] flex flex-row items-start justify-center max-w-full">
        <img
          className="h-6 w-6 relative object-contain shrink-0"
          alt=""
          src="/actions--navigation--chevronright--24@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame11;
