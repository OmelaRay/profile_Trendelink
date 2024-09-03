import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Navigation1 from "../components/Navigation1";
import ProfileHeader from "../components/ProfileHeader";
import Menu from "../components/Menu";
import GroupComponent from "../components/GroupComponent";
import Calendar from "../components/Calendar";
import GroupComponent3 from "../components/GroupComponent3";

const Frame21: FunctionComponent = () => {
  return (
    <div className="w-full h-[1427px] relative bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-[35px] px-[100px] pb-[50px] box-border gap-[358px] leading-[normal] tracking-[normal] mq750:gap-[179px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:gap-[89px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:h-auto">
      <main className="self-stretch flex flex-col items-end justify-start gap-[87px] shrink-0 max-w-full lg:gap-[43px] mq750:gap-[22px]">
        <section className="self-stretch flex flex-row items-start justify-start gap-[70px] max-w-full text-left text-base text-text font-inter lg:gap-[35px] mq750:gap-[17px]">
          <Navigation1 />
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-[calc(100%_-_190px)] mq750:max-w-full">
            <ProfileHeader
              groupDivLeft="3px"
              groupDivTop="35px"
              groupDivRight="unset"
              profilePicture="/ellipse-1@2x.png"
              group95="/group-95.svg"
              divTextDecoration="unset"
              editButtonBorderRadius="unset"
              editButtonBackgroundColor="unset"
              editButtonOverflow="unset"
              editButtonDisplay="unset"
              editButtonFlexDirection="unset"
              editButtonPadding="unset"
            />
            <Menu
              prop="/1.svg"
              prop1="/-21.svg"
              prop2="/-11.svg"
              prop3="/-22.svg"
              prop4="/-32.svg"
              prop5="/-2-1.svg"
              prop6="/-41.svg"
              prop7="/-51.svg"
              prop8="/-61.svg"
              prop9="/-71.svg"
              prop10="/-81.svg"
              prop11="/--2.svg"
              prop12="Профіль"
              prop13="Пошук"
              prop14="Чат"
              prop15="статистика"
              prop16="календар"
              prop17="відгуки"
              prop18="Сповіщення"
              prop19="новини"
              prop110="Збережені"
              prop111="Умови співпраці"
              prop112="Налаштування"
              prop113="служба підтримки"
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
              propAlignSelf4="stretch"
              propAlignSelf5="stretch"
              propAlignSelf6="unset"
              propAlignSelf7="stretch"
              propAlignSelf8="stretch"
              propAlignSelf9="stretch"
              propAlignSelf10="stretch"
              propOverflow="hidden"
              propOverflow1="hidden"
              propOverflow2="hidden"
              propOverflow3="hidden"
              propOverflow4="hidden"
              propOverflow5="hidden"
              propOverflow6="unset"
              propOverflow7="hidden"
              propOverflow8="hidden"
              propOverflow9="hidden"
              propOverflow10="hidden"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propFlex4="unset"
              propFlex5="unset"
              propFlex6="1"
              propFlex7="unset"
              propFlex8="unset"
              propFlex9="unset"
              propFlex10="unset"
              propOverflow12="hidden"
              propOverflow13="unset"
              propOverflow14="hidden"
              propOverflow15="hidden"
              propOverflow16="hidden"
              propOverflow17="hidden"
              propOverflow18="hidden"
              propOverflow19="hidden"
              propOverflow110="hidden"
              propOverflow111="hidden"
              propOverflow112="hidden"
              propHeight="35px"
              propHeight1="35px"
              propHeight2="34.9px"
              propHeight3="32.5px"
              propHeight4="32.6px"
              propHeight5="34.4px"
              propHeight6="29.4px"
              propHeight7="28.6px"
              propHeight8="40px"
              propHeight9="35px"
              propHeight10="32.3px"
              propWidth="73px"
              propWidth1="60px"
              propWidth2="32px"
              propWidth3="108px"
              propWidth4="87px"
              propWidth5="69px"
              propWidth6="110px"
              propWidth7="71px"
              propWidth8="91px"
              propWidth9="149px"
              propWidth10="136px"
            />
            <GroupComponent />
            <div className="flex-1 flex flex-col items-end justify-start gap-[337px] max-w-full mq750:gap-[84px] mq1050:gap-[168px]">
              <div className="w-[383px] h-[35px] rounded-21xl bg-white flex flex-row items-center justify-start py-[7px] px-[15px] box-border max-w-full z-[1]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslightsearch.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-[930px] flex flex-row items-start justify-start relative max-w-full">
                  <div className="!m-[0] absolute top-[115px] left-[5px] rounded-21xl overflow-hidden flex flex-row items-start justify-start py-[5px] px-0 gap-[9.5px] z-[1]">
                    <b className="relative leading-[19.33px] inline-block min-w-[110px]">{`Мої співпраці `}</b>
                    <b className="relative text-sm inline-block text-main-black min-w-[37px]">
                      2024
                    </b>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                      loading="lazy"
                      alt=""
                      src="/icons@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[145px] max-w-full text-center text-2xs text-transparent mq450:gap-9 mq1050:gap-[72px]">
                    <div className="w-[748px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[5px] max-w-full">
                        <div className="flex-1 rounded-8xs border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-between py-0.5 pl-[9px] pr-[11px] min-w-[143px] gap-5 z-[1]">
                          <div className="w-[127px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                            <div className="self-stretch relative inline-block min-w-[127px]">
                              Введіть ключове слово
                            </div>
                          </div>
                          <img
                            className="h-4 w-4 relative object-cover min-h-[16px]"
                            alt=""
                            src="/actions--formatting--edit--25@2x.png"
                          />
                        </div>
                        <div className="w-[178px] rounded-8xs border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-0.5 pl-[9px] pr-[11px] gap-5 z-[1]">
                          <div className="w-[82px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                            <div className="self-stretch relative inline-block min-w-[82px]">
                              Оберіть період
                            </div>
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 object-contain min-h-[16px]"
                            alt=""
                            src="/icons@2x.png"
                          />
                        </div>
                        <Dropdown
                          className="w-[86px] z-[1]"
                          overlay={
                            <Menu>
                              {([] as any).map((option: any, index: number) => (
                                <Menu.Item key={index}>
                                  <a onClick={(e) => e.preventDefault()}>
                                    {option.value || ""}
                                  </a>
                                </Menu.Item>
                              ))}
                            </Menu>
                          }
                          trigger={["hover"]}
                        >
                          <Button onClick={(e) => e.preventDefault()}>
                            {` `}
                            <DownOutlined />
                          </Button>
                        </Dropdown>
                        <Dropdown
                          className="w-[97px] z-[1]"
                          overlay={
                            <Menu>
                              {([] as any).map((option: any, index: number) => (
                                <Menu.Item key={index}>
                                  <a onClick={(e) => e.preventDefault()}>
                                    {option.value || ""}
                                  </a>
                                </Menu.Item>
                              ))}
                            </Menu>
                          }
                          trigger={["hover"]}
                        >
                          <Button onClick={(e) => e.preventDefault()}>
                            {` `}
                            <DownOutlined />
                          </Button>
                        </Dropdown>
                        <Dropdown
                          className="w-[99px] z-[1]"
                          overlay={
                            <Menu>
                              {([] as any).map((option: any, index: number) => (
                                <Menu.Item key={index}>
                                  <a onClick={(e) => e.preventDefault()}>
                                    {option.value || ""}
                                  </a>
                                </Menu.Item>
                              ))}
                            </Menu>
                          }
                          trigger={["hover"]}
                        >
                          <Button onClick={(e) => e.preventDefault()}>
                            {` `}
                            <DownOutlined />
                          </Button>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-left text-sm text-main-black mq450:gap-5">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full mq450:gap-[17px] mq1050:flex-wrap">
                        <Calendar
                          propMinWidth="298px"
                          prop="Березень"
                          propMinWidth1="unset"
                          propMinWidth2="unset"
                          propMinWidth3="unset"
                          propMinWidth4="unset"
                          propMinWidth5="unset"
                          propMinWidth6="unset"
                          propMinWidth7="unset"
                          prop1="1"
                          prop2="2"
                          prop3="3"
                          prop4="4"
                          prop5="5"
                          prop6="6"
                          prop7="7"
                          prop8="8"
                          prop9="9"
                          prop10="10"
                          prop11="11"
                          prop12="12"
                          prop13="13"
                          prop14="14"
                          prop15="15"
                          prop16="16"
                          prop17="17"
                          prop18="18"
                          prop19="19"
                          prop20="20"
                          prop21="21"
                          prop22="22"
                          prop23="23"
                          prop24="24"
                          prop25="25"
                          prop26="26"
                          prop27="27"
                          prop28="28"
                          prop29="29"
                          prop30="30"
                          prop31="31"
                          prop32="1"
                          prop33="1"
                          prop34="1"
                          propWidth="unset"
                          propWidth1="unset"
                          propWidth2="unset"
                          propWidth3="unset"
                          propWidth4="unset"
                          propWidth5="unset"
                          propWidth6="unset"
                          propWidth7="unset"
                          propWidth8="unset"
                          propWidth9="unset"
                          propWidth10="unset"
                          propWidth11="unset"
                          propWidth12="unset"
                          propWidth13="unset"
                          propWidth14="unset"
                          propWidth15="unset"
                          propWidth16="unset"
                          propWidth17="unset"
                          propWidth18="unset"
                          propWidth19="unset"
                          propWidth20="unset"
                          propWidth21="unset"
                          propWidth22="unset"
                          propWidth23="unset"
                          propWidth24="unset"
                          propWidth25="unset"
                          propWidth26="unset"
                          propWidth27="unset"
                          propWidth28="24px"
                          propWidth29="24px"
                          propWidth30="24px"
                          propWidth31="24px"
                          propWidth32="24px"
                          propWidth33="24px"
                          propFlex="1"
                          propFlex1="1"
                          propFlex2="1"
                          propFlex3="1"
                          propFlex4="1"
                          propFlex5="1"
                          propFlex6="1"
                          propFlex7="1"
                          propFlex8="1"
                          propFlex9="1"
                          propFlex10="1"
                          propFlex11="1"
                          propFlex12="1"
                          propFlex13="1"
                          propFlex14="1"
                          propFlex15="1"
                          propFlex16="1"
                          propFlex17="1"
                          propFlex18="1"
                          propFlex19="1"
                          propFlex20="1"
                          propFlex21="1"
                          propFlex22="1"
                          propFlex23="1"
                          propFlex24="1"
                          propFlex25="1"
                          propFlex26="1"
                          propFlex27="1"
                          propFlex28="unset"
                          propFlex29="unset"
                          propFlex30="unset"
                          propFlex31="unset"
                          propFlex32="unset"
                          propFlex33="unset"
                          propBorderRadius="40px"
                          propBorderRadius1="unset"
                          propBorderRadius2="unset"
                          propBorderRadius3="40px"
                          propBorderRadius4="40px"
                          propBorderRadius5="unset"
                          propBorderRadius6="unset"
                          propBorderRadius7="40px"
                          propBorderRadius8="40px"
                          propBorderRadius9="40px"
                          propBorderRadius10="unset"
                          propBorderRadius11="unset"
                          propBorderRadius12="40px"
                          propBorderRadius13="unset"
                          propBorderRadius14="40px"
                          propBorderRadius15="40px"
                          propBorderRadius16="unset"
                          propBorderRadius17="unset"
                          propBorderRadius18="40px"
                          propBorderRadius19="unset"
                          propBorderRadius20="unset"
                          propBorderRadius21="unset"
                          propBorderRadius22="unset"
                          propBorderRadius23="unset"
                          propBorderRadius24="unset"
                          propBorderRadius25="unset"
                          propBorderRadius26="unset"
                          propBorderRadius27="unset"
                          propBorderRadius28="unset"
                          propBorderRadius29="unset"
                          propBorderRadius30="unset"
                          propBorderRadius31="unset"
                          propBorderRadius32="unset"
                          propBorderRadius33="unset"
                          propBackgroundColor="#009ea0"
                          propBackgroundColor1="unset"
                          propBackgroundColor2="unset"
                          propBackgroundColor3="#009ea0"
                          propBackgroundColor4="#009ea0"
                          propBackgroundColor5="unset"
                          propBackgroundColor6="unset"
                          propBackgroundColor7="#009ea0"
                          propBackgroundColor8="#f6a801"
                          propBackgroundColor9="#009ea0"
                          propBackgroundColor10="unset"
                          propBackgroundColor11="unset"
                          propBackgroundColor12="#009ea0"
                          propBackgroundColor13="unset"
                          propBackgroundColor14="#009ea0"
                          propBackgroundColor15="#009ea0"
                          propBackgroundColor16="unset"
                          propBackgroundColor17="unset"
                          propBackgroundColor18="#009ea0"
                          propBackgroundColor19="unset"
                          propBackgroundColor20="unset"
                          propBackgroundColor21="unset"
                          propBackgroundColor22="unset"
                          propBackgroundColor23="unset"
                          propBackgroundColor24="unset"
                          propBackgroundColor25="unset"
                          propBackgroundColor26="unset"
                          propBackgroundColor27="unset"
                          propBackgroundColor28="unset"
                          propBackgroundColor29="unset"
                          propBackgroundColor30="unset"
                          propBackgroundColor31="unset"
                          propBackgroundColor32="unset"
                          propBackgroundColor33="unset"
                          propOverflow="hidden"
                          propOverflow1="unset"
                          propOverflow2="unset"
                          propOverflow3="hidden"
                          propOverflow4="hidden"
                          propOverflow5="unset"
                          propOverflow6="unset"
                          propOverflow7="hidden"
                          propOverflow8="unset"
                          propOverflow9="hidden"
                          propOverflow10="unset"
                          propOverflow11="unset"
                          propOverflow12="hidden"
                          propOverflow13="unset"
                          propOverflow14="hidden"
                          propOverflow15="hidden"
                          propOverflow16="unset"
                          propOverflow17="unset"
                          propOverflow18="hidden"
                          propOverflow19="unset"
                          propOverflow20="unset"
                          propOverflow21="unset"
                          propOverflow22="unset"
                          propOverflow23="unset"
                          propOverflow24="unset"
                          propOverflow25="unset"
                          propOverflow26="unset"
                          propOverflow27="unset"
                          propOverflow28="unset"
                          propOverflow29="unset"
                          propOverflow30="unset"
                          propOverflow31="unset"
                          propOverflow32="unset"
                          propOverflow33="unset"
                          propColor="#fdfdfd"
                          propColor1="#3c3c3c"
                          propColor2="#3c3c3c"
                          propColor3="#fdfdfd"
                          propColor4="#fdfdfd"
                          propColor5="#3c3c3c"
                          propColor6="#3c3c3c"
                          propColor7="#fdfdfd"
                          propColor8="#fff"
                          propColor9="#fdfdfd"
                          propColor10="#3c3c3c"
                          propColor11="#3c3c3c"
                          propColor12="#fdfdfd"
                          propColor13="#3c3c3c"
                          propColor14="#fdfdfd"
                          propColor15="#fdfdfd"
                          propColor16="#3c3c3c"
                          propColor17="#3c3c3c"
                          propColor18="#fdfdfd"
                          propColor19="#3c3c3c"
                          propColor20="#3c3c3c"
                          propColor21="#3c3c3c"
                          propColor22="#3c3c3c"
                          propColor23="#3c3c3c"
                          propColor24="#3c3c3c"
                          propColor25="#3c3c3c"
                          propColor26="#3c3c3c"
                          propColor27="#3c3c3c"
                          propColor28="#3c3c3c"
                          propColor29="#3c3c3c"
                          propColor30="#3c3c3c"
                          propColor31="rgba(60, 60, 60, 0)"
                          propColor32="rgba(60, 60, 60, 0)"
                          propColor33="rgba(60, 60, 60, 0)"
                          propTextShadow="unset"
                          propTextShadow1="unset"
                          propTextShadow2="unset"
                          propTextShadow3="unset"
                          propTextShadow4="unset"
                          propTextShadow5="unset"
                          propTextShadow6="unset"
                          propTextShadow7="unset"
                          propTextShadow8="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          propTextShadow9="unset"
                          propTextShadow10="unset"
                          propTextShadow11="unset"
                          propTextShadow12="unset"
                          propTextShadow13="unset"
                          propTextShadow14="unset"
                          propTextShadow15="unset"
                          propTextShadow16="unset"
                          propTextShadow17="unset"
                          propTextShadow18="unset"
                          propTextShadow19="unset"
                          propTextShadow20="unset"
                          propTextShadow21="unset"
                          propTextShadow22="unset"
                          propTextShadow23="unset"
                          propTextShadow24="unset"
                          propTextShadow25="unset"
                          propTextShadow26="unset"
                          propTextShadow27="unset"
                          propTextShadow28="unset"
                          propTextShadow29="unset"
                          propTextShadow30="unset"
                          propTextShadow31="unset"
                          propTextShadow32="unset"
                          propTextShadow33="unset"
                          propTextDecoration="unset"
                          propTextDecoration1="unset"
                          propTextDecoration2="unset"
                          propTextDecoration3="unset"
                          propTextDecoration4="unset"
                          propTextDecoration5="unset"
                          propTextDecoration6="unset"
                          propTextDecoration7="unset"
                          propTextDecoration8="unset"
                          propTextDecoration9="unset"
                          propTextDecoration10="unset"
                          propTextDecoration11="unset"
                          propTextDecoration12="unset"
                          propTextDecoration13="unset"
                          propTextDecoration14="unset"
                          propTextDecoration15="unset"
                          propTextDecoration16="unset"
                          propTextDecoration17="unset"
                          propTextDecoration18="unset"
                          propTextDecoration19="unset"
                          propTextDecoration20="unset"
                          propTextDecoration21="unset"
                          propTextDecoration22="unset"
                          propTextDecoration23="unset"
                          propTextDecoration24="unset"
                          propTextDecoration25="unset"
                          propTextDecoration26="unset"
                          propTextDecoration27="unset"
                          propTextDecoration28="unset"
                          propTextDecoration29="unset"
                          propTextDecoration30="unset"
                          propTextDecoration31="unset"
                          propTextDecoration32="unset"
                          propTextDecoration33="unset"
                        />
                        <div className="flex-1 rounded-xl bg-aliceblue-100 flex flex-col items-start justify-start pt-[19px] pb-[47px] pl-[43px] pr-8 box-border gap-[71px] min-w-[388px] max-w-full z-[1] mq750:gap-[35px] mq750:pl-[21px] mq750:box-border mq750:min-w-full mq450:gap-[18px]">
                          <div className="w-[597px] h-[321px] relative rounded-xl bg-aliceblue-100 hidden max-w-full" />
                          <div className="self-stretch flex flex-col items-end justify-start gap-[5px] max-w-full">
                            <img
                              className="w-4 h-4 relative object-cover z-[1]"
                              alt=""
                              src="/actions--formatting--edit--25@2x.png"
                            />
                            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                              <div className="flex flex-row items-end justify-start gap-[37px] max-w-full mq750:flex-wrap mq450:gap-[18px]">
                                <div className="flex flex-col items-start justify-start gap-[15px]">
                                  <b className="relative z-[1]">{`Зустріч з блогером: `}</b>
                                  <div className="relative inline-block min-w-[73px] z-[1]">
                                    Дата і час:
                                  </div>
                                  <div className="relative z-[1]">
                                    Відповідальні особи:
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-[12.5px]">
                                  <div className="relative text-base z-[1]">
                                    Корнічук Наталія
                                  </div>
                                  <div className="flex flex-row items-start justify-start gap-[15px]">
                                    <div className="flex flex-row items-start justify-start gap-[5px]">
                                      <img
                                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                                        loading="lazy"
                                        alt=""
                                        src="/fluentemojiflatspiralcalendar1.svg"
                                      />
                                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <b className="relative inline-block min-w-[111px] z-[1]">
                                          9 березня 2024
                                        </b>
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[5px]">
                                      <img
                                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                                        loading="lazy"
                                        alt=""
                                        src="/fluentemojiflatalarmclock.svg"
                                      />
                                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <b className="relative inline-block min-w-[39px] z-[1]">
                                          12.30
                                        </b>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="relative z-[1]">
                                    Анна Волошина, Галина Карпінська
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start gap-[15px]">
                              <div className="relative inline-block min-w-[52px] z-[1]">
                                Статус:
                              </div>
                              <div className="relative z-[1]">
                                Посилання і документи:
                              </div>
                              <div className="relative z-[1]">
                                Коментарі і нотатки:
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[15px]">
                              <div className="relative inline-block min-w-[81px] z-[1]">
                                Планується
                              </div>
                              <div className="relative [text-decoration:underline] inline-block min-w-[85px] z-[1]">
                                Презентація
                              </div>
                              <div className="relative z-[1]">
                                Підготувати питання
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
                        <Calendar
                          propMinWidth="unset"
                          prop="квітень"
                          propMinWidth1="unset"
                          propMinWidth2="unset"
                          propMinWidth3="unset"
                          propMinWidth4="unset"
                          propMinWidth5="unset"
                          propMinWidth6="unset"
                          propMinWidth7="unset"
                          prop1="1"
                          prop2="2"
                          prop3="3"
                          prop4="4"
                          prop5="5"
                          prop6="6"
                          prop7="7"
                          prop8="8"
                          prop9="9"
                          prop10="10"
                          prop11="11"
                          prop12="12"
                          prop13="13"
                          prop14="14"
                          prop15="15"
                          prop16="16"
                          prop17="17"
                          prop18="18"
                          prop19="19"
                          prop20="20"
                          prop21="21"
                          prop22="22"
                          prop23="23"
                          prop24="24"
                          prop25="25"
                          prop26="26"
                          prop27="27"
                          prop28="28"
                          prop29="29"
                          prop30="30"
                          prop31="31"
                          prop32="1"
                          prop33="1"
                          prop34="1"
                          propWidth="unset"
                          propWidth1="unset"
                          propWidth2="unset"
                          propWidth3="unset"
                          propWidth4="unset"
                          propWidth5="unset"
                          propWidth6="unset"
                          propWidth7="unset"
                          propWidth8="unset"
                          propWidth9="unset"
                          propWidth10="unset"
                          propWidth11="unset"
                          propWidth12="unset"
                          propWidth13="unset"
                          propWidth14="unset"
                          propWidth15="unset"
                          propWidth16="unset"
                          propWidth17="unset"
                          propWidth18="unset"
                          propWidth19="unset"
                          propWidth20="unset"
                          propWidth21="unset"
                          propWidth22="unset"
                          propWidth23="unset"
                          propWidth24="unset"
                          propWidth25="unset"
                          propWidth26="unset"
                          propWidth27="unset"
                          propWidth28="24px"
                          propWidth29="24px"
                          propWidth30="24px"
                          propWidth31="24px"
                          propWidth32="24px"
                          propWidth33="24px"
                          propFlex="1"
                          propFlex1="1"
                          propFlex2="1"
                          propFlex3="1"
                          propFlex4="1"
                          propFlex5="1"
                          propFlex6="1"
                          propFlex7="1"
                          propFlex8="1"
                          propFlex9="1"
                          propFlex10="1"
                          propFlex11="1"
                          propFlex12="1"
                          propFlex13="1"
                          propFlex14="1"
                          propFlex15="1"
                          propFlex16="1"
                          propFlex17="1"
                          propFlex18="1"
                          propFlex19="1"
                          propFlex20="1"
                          propFlex21="1"
                          propFlex22="1"
                          propFlex23="1"
                          propFlex24="1"
                          propFlex25="1"
                          propFlex26="1"
                          propFlex27="1"
                          propFlex28="unset"
                          propFlex29="unset"
                          propFlex30="unset"
                          propFlex31="unset"
                          propFlex32="unset"
                          propFlex33="unset"
                          propBorderRadius="unset"
                          propBorderRadius1="40px"
                          propBorderRadius2="unset"
                          propBorderRadius3="unset"
                          propBorderRadius4="unset"
                          propBorderRadius5="unset"
                          propBorderRadius6="unset"
                          propBorderRadius7="unset"
                          propBorderRadius8="unset"
                          propBorderRadius9="unset"
                          propBorderRadius10="unset"
                          propBorderRadius11="40px"
                          propBorderRadius12="unset"
                          propBorderRadius13="unset"
                          propBorderRadius14="40px"
                          propBorderRadius15="unset"
                          propBorderRadius16="40px"
                          propBorderRadius17="unset"
                          propBorderRadius18="unset"
                          propBorderRadius19="unset"
                          propBorderRadius20="unset"
                          propBorderRadius21="unset"
                          propBorderRadius22="unset"
                          propBorderRadius23="unset"
                          propBorderRadius24="unset"
                          propBorderRadius25="40px"
                          propBorderRadius26="unset"
                          propBorderRadius27="unset"
                          propBorderRadius28="unset"
                          propBorderRadius29="unset"
                          propBorderRadius30="unset"
                          propBorderRadius31="unset"
                          propBorderRadius32="unset"
                          propBorderRadius33="unset"
                          propBackgroundColor="unset"
                          propBackgroundColor1="#009ea0"
                          propBackgroundColor2="unset"
                          propBackgroundColor3="unset"
                          propBackgroundColor4="unset"
                          propBackgroundColor5="unset"
                          propBackgroundColor6="unset"
                          propBackgroundColor7="unset"
                          propBackgroundColor8="unset"
                          propBackgroundColor9="unset"
                          propBackgroundColor10="unset"
                          propBackgroundColor11="#009ea0"
                          propBackgroundColor12="unset"
                          propBackgroundColor13="unset"
                          propBackgroundColor14="#009ea0"
                          propBackgroundColor15="unset"
                          propBackgroundColor16="#009ea0"
                          propBackgroundColor17="unset"
                          propBackgroundColor18="unset"
                          propBackgroundColor19="unset"
                          propBackgroundColor20="unset"
                          propBackgroundColor21="unset"
                          propBackgroundColor22="unset"
                          propBackgroundColor23="unset"
                          propBackgroundColor24="unset"
                          propBackgroundColor25="#009ea0"
                          propBackgroundColor26="unset"
                          propBackgroundColor27="unset"
                          propBackgroundColor28="unset"
                          propBackgroundColor29="unset"
                          propBackgroundColor30="unset"
                          propBackgroundColor31="unset"
                          propBackgroundColor32="unset"
                          propBackgroundColor33="unset"
                          propOverflow="unset"
                          propOverflow1="hidden"
                          propOverflow2="unset"
                          propOverflow3="unset"
                          propOverflow4="unset"
                          propOverflow5="unset"
                          propOverflow6="unset"
                          propOverflow7="unset"
                          propOverflow8="unset"
                          propOverflow9="unset"
                          propOverflow10="unset"
                          propOverflow11="hidden"
                          propOverflow12="unset"
                          propOverflow13="unset"
                          propOverflow14="hidden"
                          propOverflow15="unset"
                          propOverflow16="hidden"
                          propOverflow17="unset"
                          propOverflow18="unset"
                          propOverflow19="unset"
                          propOverflow20="unset"
                          propOverflow21="unset"
                          propOverflow22="unset"
                          propOverflow23="unset"
                          propOverflow24="unset"
                          propOverflow25="hidden"
                          propOverflow26="unset"
                          propOverflow27="unset"
                          propOverflow28="unset"
                          propOverflow29="unset"
                          propOverflow30="unset"
                          propOverflow31="unset"
                          propOverflow32="unset"
                          propOverflow33="unset"
                          propColor="#3c3c3c"
                          propColor1="#fdfdfd"
                          propColor2="#3c3c3c"
                          propColor3="#3c3c3c"
                          propColor4="#3c3c3c"
                          propColor5="#3c3c3c"
                          propColor6="#3c3c3c"
                          propColor7="#3c3c3c"
                          propColor8="#3c3c3c"
                          propColor9="#3c3c3c"
                          propColor10="#3c3c3c"
                          propColor11="#fdfdfd"
                          propColor12="#3c3c3c"
                          propColor13="#3c3c3c"
                          propColor14="#fdfdfd"
                          propColor15="#3c3c3c"
                          propColor16="#fdfdfd"
                          propColor17="#3c3c3c"
                          propColor18="#3c3c3c"
                          propColor19="#3c3c3c"
                          propColor20="#3c3c3c"
                          propColor21="#3c3c3c"
                          propColor22="#3c3c3c"
                          propColor23="#3c3c3c"
                          propColor24="#3c3c3c"
                          propColor25="#fdfdfd"
                          propColor26="#3c3c3c"
                          propColor27="#3c3c3c"
                          propColor28="#3c3c3c"
                          propColor29="#3c3c3c"
                          propColor30="#3c3c3c"
                          propColor31="rgba(60, 60, 60, 0)"
                          propColor32="rgba(60, 60, 60, 0)"
                          propColor33="rgba(60, 60, 60, 0)"
                          propTextShadow="unset"
                          propTextShadow1="unset"
                          propTextShadow2="unset"
                          propTextShadow3="unset"
                          propTextShadow4="unset"
                          propTextShadow5="unset"
                          propTextShadow6="unset"
                          propTextShadow7="unset"
                          propTextShadow8="unset"
                          propTextShadow9="unset"
                          propTextShadow10="unset"
                          propTextShadow11="unset"
                          propTextShadow12="unset"
                          propTextShadow13="unset"
                          propTextShadow14="unset"
                          propTextShadow15="unset"
                          propTextShadow16="unset"
                          propTextShadow17="unset"
                          propTextShadow18="unset"
                          propTextShadow19="unset"
                          propTextShadow20="unset"
                          propTextShadow21="unset"
                          propTextShadow22="unset"
                          propTextShadow23="unset"
                          propTextShadow24="unset"
                          propTextShadow25="unset"
                          propTextShadow26="unset"
                          propTextShadow27="unset"
                          propTextShadow28="unset"
                          propTextShadow29="unset"
                          propTextShadow30="unset"
                          propTextShadow31="unset"
                          propTextShadow32="unset"
                          propTextShadow33="unset"
                          propTextDecoration="unset"
                          propTextDecoration1="unset"
                          propTextDecoration2="unset"
                          propTextDecoration3="unset"
                          propTextDecoration4="unset"
                          propTextDecoration5="unset"
                          propTextDecoration6="unset"
                          propTextDecoration7="unset"
                          propTextDecoration8="unset"
                          propTextDecoration9="unset"
                          propTextDecoration10="unset"
                          propTextDecoration11="unset"
                          propTextDecoration12="unset"
                          propTextDecoration13="unset"
                          propTextDecoration14="unset"
                          propTextDecoration15="none"
                          propTextDecoration16="none"
                          propTextDecoration17="unset"
                          propTextDecoration18="none"
                          propTextDecoration19="unset"
                          propTextDecoration20="unset"
                          propTextDecoration21="unset"
                          propTextDecoration22="unset"
                          propTextDecoration23="unset"
                          propTextDecoration24="unset"
                          propTextDecoration25="unset"
                          propTextDecoration26="unset"
                          propTextDecoration27="unset"
                          propTextDecoration28="unset"
                          propTextDecoration29="unset"
                          propTextDecoration30="unset"
                          propTextDecoration31="unset"
                          propTextDecoration32="unset"
                          propTextDecoration33="unset"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[1014px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-8 w-8 relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/actions--navigation--chevronleft--34@2x.png"
          />
        </div>
      </main>
      <div className="w-[1076px] flex flex-row items-start justify-center max-w-full">
        <img
          className="h-6 w-6 relative object-contain shrink-0"
          alt=""
          src="/actions--navigation--chevronright--24@2x.png"
        />
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-300 z-[4]" />
      <div className="w-[867px] !m-[0] absolute top-[447px] left-[324px] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[1368px] w-[1016px] absolute !m-[0] top-[-412px] right-[-76px] rounded-21xl"
          alt=""
          src="/bg.svg"
        />
        <GroupComponent3 />
      </div>
    </div>
  );
};

export default Frame21;
