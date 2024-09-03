import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete, Input, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Component4 from "../components/Component4";
import ProfileHeader from "../components/ProfileHeader";
import Days from "../components/Days";
import Component3 from "../components/Component3";

const Frame41: FunctionComponent = () => {
  return (
    <div className="w-full h-[1427px] relative bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-[35px] px-[100px] pb-[50px] box-border gap-[358px] leading-[normal] tracking-[normal] mq750:gap-[179px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:gap-[89px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:h-auto">
      <main className="self-stretch flex flex-row items-start justify-start gap-[74px] shrink-0 max-w-full text-center text-base text-white font-logo-font lg:gap-[37px] mq750:gap-[18px]">
        <div className="w-[120px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border mq750:hidden">
          <div className="self-stretch h-[1100px] relative">
            <Component4 />
            <a className="[text-decoration:none] absolute top-[52px] left-[33px] font-bold text-[inherit] inline-block w-[54px] h-[43px] z-[1]">
              <p className="m-0">Trend</p>
              <p className="m-0">Link</p>
            </a>
          </div>
        </div>
        <section className="flex-1 flex flex-row items-start justify-start relative max-w-[calc(100%_-_194px)] text-center text-sm text-main-black font-inter mq750:max-w-full">
          <ProfileHeader
            groupDivLeft="-1px"
            groupDivTop="35px"
            groupDivRight="unset"
            profilePicture="/ellipse-1@2x.png"
            group95="/group-95.svg"
            divTextDecoration="none"
            editButtonBorderRadius="40px"
            editButtonBackgroundColor="#009ea0"
            editButtonOverflow="hidden"
            editButtonDisplay="flex"
            editButtonFlexDirection="row"
            editButtonPadding="10px 56px"
          />
          <div className="flex-1 flex flex-col items-end justify-start gap-[375px] max-w-full mq750:gap-[94px] mq1050:gap-[187px]">
            <AutoComplete
              className="w-[383px] h-[35px] max-w-full z-[1]"
              style={{ width: 383 }}
            />
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[927px] flex flex-col items-end justify-start gap-[87px] max-w-full mq450:gap-[22px] mq1050:gap-[43px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                  <div className="w-[770px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-2xs text-transparent">
                    <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[5px] max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[53px] min-w-[168px] text-left text-base text-text mq450:gap-[26px]">
                        <Input
                          className="bg-[transparent] self-stretch font-inter text-2xs text-transparent gap-5 z-[1]"
                          bordered={true}
                        />
                        <div className="rounded-21xl overflow-hidden flex flex-row items-start justify-start py-[5px] px-0 gap-[9.5px] z-[1]">
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
                      </div>
                      <div className="w-[178px] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-8xs border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start opacity-[0] z-[1]">
                          <div className="flex-1 rounded-t-8xs rounded-b-none border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-row items-end justify-between py-0.5 pl-[9px] pr-[11px] gap-5 z-[3]">
                            <div className="h-3.5 w-[82px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                                <div className="self-stretch flex-1 relative">
                                  Оберіть період
                                </div>
                                <div className="w-[82px] relative inline-block min-w-[82px] ml-[-82px]">
                                  Оберіть період
                                </div>
                              </div>
                            </div>
                            <div className="h-4 w-4 relative">
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
                                alt=""
                                src="/icons-1@2x.png"
                              />
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
                                alt=""
                                src="/icons-2@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start relative mt-[-1px]">
                          <img
                            className="h-[15px] w-[15px] absolute !m-[0] right-[53px] bottom-[9px] object-cover z-[1]"
                            alt=""
                            src="/organization--status--information--24@2x.png"
                          />
                          <div className="flex-1 rounded-t-none rounded-b-8xs bg-white border-gainsboro-100 border-[1px] border-solid flex flex-col items-start justify-start pt-[13px] pb-[11px] pl-[9px] pr-[7px] gap-1.5 z-[2]">
                            <div className="w-[178px] h-[82px] relative rounded-t-none rounded-b-8xs bg-white border-gainsboro-100 border-[1px] border-solid box-border hidden" />
                            <div className="self-stretch flex flex-row items-start justify-start gap-[3px]">
                              <Dropdown
                                className="flex-1 gap-5 z-[3]"
                                overlay={
                                  <Menu>
                                    {([] as any).map(
                                      (option: any, index: number) => (
                                        <Menu.Item key={index}>
                                          <a
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {option.value || ""}
                                          </a>
                                        </Menu.Item>
                                      )
                                    )}
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
                                className="flex-1 z-[3]"
                                overlay={
                                  <Menu>
                                    {([] as any).map(
                                      (option: any, index: number) => (
                                        <Menu.Item key={index}>
                                          <a
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {option.value || ""}
                                          </a>
                                        </Menu.Item>
                                      )
                                    )}
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
                            <div className="self-stretch flex flex-row items-start justify-start gap-[3px]">
                              <Dropdown
                                className="flex-1 gap-5 z-[3]"
                                overlay={
                                  <Menu>
                                    {([] as any).map(
                                      (option: any, index: number) => (
                                        <Menu.Item key={index}>
                                          <a
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {option.value || ""}
                                          </a>
                                        </Menu.Item>
                                      )
                                    )}
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
                                className="flex-1 z-[3]"
                                overlay={
                                  <Menu>
                                    {([] as any).map(
                                      (option: any, index: number) => (
                                        <Menu.Item key={index}>
                                          <a
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {option.value || ""}
                                          </a>
                                        </Menu.Item>
                                      )
                                    )}
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
                        </div>
                      </div>
                      <Dropdown
                        className="w-[88px] z-[1]"
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
                      <div className="w-[125px] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-8xs border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start opacity-[0] z-[1]">
                          <div className="flex-1 rounded-t-8xs rounded-b-none border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-row items-end justify-between py-0.5 pl-3.5 pr-1 gap-5 z-[4]">
                            <div className="w-[49px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                              <div className="self-stretch h-[13px] relative">
                                <div className="absolute top-[0px] left-[0px] inline-block w-full h-full">
                                  Категорії
                                </div>
                                <div className="absolute top-[0px] left-[0px] inline-block min-w-[49px] w-full h-full">
                                  Категорії
                                </div>
                              </div>
                            </div>
                            <div className="h-4 w-4 relative">
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
                                alt=""
                                src="/icons-1@2x.png"
                              />
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
                                alt=""
                                src="/icons-2@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start relative mt-[-1px] text-sm text-black">
                          <div className="w-[202px] absolute !m-[0] bottom-[8px] left-[-145px] inline-block z-[1]">
                            найближча інтеграція 1.03.24
                          </div>
                          <div className="rounded-t-none rounded-b-8xs bg-white border-gainsboro-100 border-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-1.5 z-[2] text-2xs text-main-black">
                            <div className="self-stretch h-[82px] relative rounded-t-none rounded-b-8xs bg-white border-gainsboro-100 border-[1px] border-solid box-border hidden" />
                            <div className="bg-whitesmoke-100 flex flex-row items-start justify-start py-1.5 px-[9px] whitespace-nowrap z-[3]">
                              <div className="relative inline-block min-w-[105px]">
                                Рекламна компанія
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                              <div className="flex flex-col items-start justify-start gap-3">
                                <div className="relative inline-block min-w-[83px] z-[3]">
                                  Онлайн зустріч
                                </div>
                                <div className="relative inline-block min-w-[84px] z-[3]">
                                  Офлайн зустріч
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[99px] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-8xs border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start opacity-[0] z-[1]">
                          <div className="flex-1 rounded-t-8xs rounded-b-none border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-row items-end justify-start py-0.5 px-3.5 gap-px z-[3]">
                            <div className="h-3.5 w-[52px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                                <div className="self-stretch flex-1 relative">
                                  Перегляд
                                </div>
                                <div className="relative inline-block min-w-[52px] ml-[-52px]">
                                  Перегляд
                                </div>
                              </div>
                            </div>
                            <div className="h-4 w-4 relative">
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
                                alt=""
                                src="/icons-1@2x.png"
                              />
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
                                alt=""
                                src="/icons-2@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-t-none rounded-b-8xs border-gainsboro-100 border-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-1.5 z-[2] mt-[-1px] text-main-black">
                          <div className="self-stretch h-[57px] relative rounded-t-none rounded-b-8xs border-gainsboro-100 border-[1px] border-solid box-border hidden" />
                          <div className="w-[97px] bg-whitesmoke-100 flex flex-row items-start justify-start py-1.5 px-[11px] box-border z-[4]">
                            <div className="relative inline-block min-w-[53px]">
                              Календар
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                            <div className="relative inline-block min-w-[40px] z-[3]">
                              Список
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[15px] pl-px pr-0 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[31px] max-w-full mq450:gap-[15px] mq1050:flex-wrap">
                      <div className="w-[298px] shadow-[3px_3px_22px_rgba(150,_150,_150,_0.11)] rounded-xl bg-aliceblue-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[19px] box-border gap-[15.2px] min-w-[298px] z-[1] mq1050:flex-1">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.8px]">
                          <div className="flex-1 relative tracking-[0.01em]">
                            <span className="uppercase">Березень</span> 2024
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                          <div className="h-[0.8px] flex-1 relative border-neutral-blue-black-40 border-t-[0.8px] border-solid box-border" />
                        </div>
                        <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-1 px-7 box-border gap-3.5 text-3xs text-slategray">
                          <div className="flex-1 relative uppercase">пн</div>
                          <div className="flex-1 relative uppercase">вт</div>
                          <div className="flex-1 relative uppercase">ср</div>
                          <div className="flex-1 relative uppercase">чт</div>
                          <div className="flex-1 relative uppercase">пт</div>
                          <div className="flex-1 relative uppercase">сб</div>
                          <div className="flex-1 relative uppercase">нд</div>
                        </div>
                        <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="1"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="2"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="3"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="4"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="5"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="6"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="7"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                        </div>
                        <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="8"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#f6a801"
                            propOverflow="unset"
                            prop="9"
                            propColor="#fff"
                            propTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="10"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="11"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="12"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="13"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="14"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                        </div>
                        <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="15"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="16"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="17"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="18"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="40px"
                            propBackgroundColor="#009ea0"
                            propOverflow="hidden"
                            prop="19"
                            propColor="#fdfdfd"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="20"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="21"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                        </div>
                        <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="22"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="23"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="24"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="25"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="26"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="27"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="28"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                        </div>
                        <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[23.2px]">
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="29"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="30"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="31"
                            propColor="#3c3c3c"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="1"
                            propColor="rgba(60, 60, 60, 0)"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="1"
                            propColor="rgba(60, 60, 60, 0)"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                          <Days
                            propWidth="unset"
                            propFlex="1"
                            propBorderRadius="unset"
                            propBackgroundColor="unset"
                            propOverflow="unset"
                            prop="1"
                            propColor="rgba(60, 60, 60, 0)"
                            propTextShadow="unset"
                            propTextDecoration="unset"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[388px] max-w-full text-left mq750:min-w-full">
                        <img
                          className="h-[1368px] w-[1016px] absolute !m-[0] top-[-541px] left-[-373px] rounded-21xl"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="flex-1 rounded-xl bg-aliceblue-100 flex flex-col items-start justify-start pt-5 pb-[47px] pl-[43px] pr-5 box-border gap-[71px] max-w-full z-[1] mq750:gap-[35px] mq750:pl-[21px] mq750:box-border mq450:gap-[18px]">
                          <div className="w-[597px] h-[321px] relative rounded-xl bg-aliceblue-100 hidden max-w-full" />
                          <div className="self-stretch flex flex-col items-end justify-start gap-1 max-w-full">
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
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[31px] max-w-full mq450:gap-[15px] mq1050:flex-wrap">
                    <div className="w-[298px] shadow-[3px_3px_22px_rgba(150,_150,_150,_0.11)] rounded-xl bg-aliceblue-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[19px] box-border gap-[15.2px] min-w-[298px] z-[1] mq1050:flex-1">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.8px]">
                        <div className="flex-1 relative tracking-[0.01em]">
                          <span className="uppercase">квітень</span> 2024
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                        <div className="h-[0.8px] flex-1 relative border-neutral-blue-black-40 border-t-[0.8px] border-solid box-border" />
                      </div>
                      <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-1 px-7 box-border gap-3.5 text-3xs text-slategray">
                        <div className="flex-1 relative uppercase">пн</div>
                        <div className="flex-1 relative uppercase">вт</div>
                        <div className="flex-1 relative uppercase">ср</div>
                        <div className="flex-1 relative uppercase">чт</div>
                        <div className="flex-1 relative uppercase">пт</div>
                        <div className="flex-1 relative uppercase">сб</div>
                        <div className="flex-1 relative uppercase">нд</div>
                      </div>
                      <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="1"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="40px"
                          propBackgroundColor="#009ea0"
                          propOverflow="hidden"
                          prop="2"
                          propColor="#fdfdfd"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="3"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="4"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="40px"
                          propBackgroundColor="#f6a801"
                          propOverflow="unset"
                          prop="5"
                          propColor="#fff"
                          propTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="6"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="7"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                      </div>
                      <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="8"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="9"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="10"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="11"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="40px"
                          propBackgroundColor="#009ea0"
                          propOverflow="hidden"
                          prop="12"
                          propColor="#fdfdfd"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="13"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="14"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                      </div>
                      <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="40px"
                          propBackgroundColor="#009ea0"
                          propOverflow="hidden"
                          prop="15"
                          propColor="#fdfdfd"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="16"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="none"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="40px"
                          propBackgroundColor="#009ea0"
                          propOverflow="hidden"
                          prop="17"
                          propColor="#fdfdfd"
                          propTextShadow="unset"
                          propTextDecoration="none"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="18"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="19"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="none"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="20"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="21"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                      </div>
                      <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[15.3px]">
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="22"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="23"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="24"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="25"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="40px"
                          propBackgroundColor="#009ea0"
                          propOverflow="hidden"
                          prop="26"
                          propColor="#fdfdfd"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="27"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="28"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                      </div>
                      <div className="ml-[-24px] w-[308px] flex flex-row items-start justify-start py-0 px-6 box-border gap-[23.2px]">
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="29"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="30"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="31"
                          propColor="#3c3c3c"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="1"
                          propColor="rgba(60, 60, 60, 0)"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="1"
                          propColor="rgba(60, 60, 60, 0)"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                        <Days
                          propWidth="unset"
                          propFlex="1"
                          propBorderRadius="unset"
                          propBackgroundColor="unset"
                          propOverflow="unset"
                          prop="1"
                          propColor="rgba(60, 60, 60, 0)"
                          propTextShadow="unset"
                          propTextDecoration="unset"
                        />
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl bg-aliceblue-100 flex flex-col items-start justify-start pt-5 pb-[47px] pl-[43px] pr-5 box-border gap-[71px] min-w-[388px] max-w-full z-[1] text-left mq750:gap-[35px] mq750:pl-[21px] mq750:box-border mq750:min-w-full mq450:gap-[18px]">
                      <div className="w-[597px] h-[321px] relative rounded-xl bg-aliceblue-100 hidden max-w-full" />
                      <div className="self-stretch flex flex-col items-end justify-start gap-1 max-w-full">
                        <img
                          className="w-4 h-4 relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/actions--formatting--edit--25@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                          <div className="flex flex-row items-end justify-start gap-[19px] max-w-full mq750:flex-wrap">
                            <div className="flex flex-col items-start justify-start gap-[15px]">
                              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                                <b className="relative z-[1]">{`Зустріч з фотографом: `}</b>
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 px-px">
                                <div className="relative inline-block min-w-[73px] z-[1]">
                                  Дата і час:
                                </div>
                              </div>
                              <div className="relative z-[1]">
                                Відповідальні особи:
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[15px] text-base">
                              <div className="flex flex-col items-start justify-start gap-2.5">
                                <div className="relative inline-block min-w-[110px] z-[1]">
                                  Даніл Шевчук
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[15px] text-sm">
                                  <div className="flex flex-row items-start justify-start gap-[5px]">
                                    <img
                                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                                      loading="lazy"
                                      alt=""
                                      src="/fluentemojiflatspiralcalendar1.svg"
                                    />
                                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                      <b className="relative inline-block min-w-[110px] z-[1]">
                                        5 березня 2024
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
                                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                      <b className="relative inline-block min-w-[39px] z-[1]">
                                        12.30
                                      </b>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative text-sm z-[1]">
                                Анна Волошина, Галина Карпінська
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                        <div className="flex flex-row items-start justify-start gap-3.5 max-w-full mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start gap-[15px]">
                            <div className="relative inline-block min-w-[52px] z-[1]">
                              Статус:
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                              <div className="relative z-[1]">
                                Посилання і документи:
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="relative z-[1]">
                                Коментарі і нотатки:
                              </div>
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
                              Підготувати референси
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
                  <img
                    className="h-8 w-8 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/actions--navigation--chevronleft--34@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <Component3
            propFlex="unset"
            propWidth="344px"
            propMargin="0 !important"
            propPosition="absolute"
            propTop="158px"
            propLeft="-194px"
            navigationOptionsBorderRadius="39px"
            navigationOptionsBackgroundColor="rgba(38, 46, 46, 0)"
            navigationOptionsOverflow="hidden"
            navigationOptionsDisplay="flex"
            navigationOptionsFlexDirection="row"
            navigationOptionsPadding="17.5px 42px 17.6px"
            navigationOptionsGap="30px"
            navigationOptionsAlignSelf="unset"
            navigationOptionsBorderRadius1="unset"
            navigationOptionsBackgroundColor1="unset"
            navigationOptionsDisplay1="unset"
            navigationOptionsFlexDirection1="unset"
            navigationOptionsPadding1="unset"
            navigationOptionsGap1="unset"
            navigationOptionsHeight="34.9px"
            navigationOptionsWidth="35px"
            navigationOptionsPosition="relative"
            showIcon={false}
            iconHeight="unset"
            iconOverflow="unset"
            iconFontSize="16px"
            iconTextTransform="uppercase"
            iconFontFamily="Inter"
            iconColor="#fff"
            iconTextAlign="left"
            div
            divWidth="unset"
            divPosition="unset"
            divFontSize="unset"
            divTextTransform="unset"
            divFontFamily="unset"
            divColor="unset"
            divTextAlign="unset"
            divAlignSelf="stretch"
            divBorderRadius="39px"
            divBackgroundColor="rgba(38, 46, 46, 0)"
            divOverflow="hidden"
            divFlexDirection="row"
            divPadding="18.7px 42px 18.8px"
            divGap="30px"
            navigationOptionsAlignSelf1="unset"
            navigationOptionsBorderRadius2="unset"
            navigationOptionsBackgroundColor2="unset"
            navigationOptionsDisplay2="unset"
            navigationOptionsFlexDirection2="unset"
            navigationOptionsPadding2="unset"
            navigationOptionsGap2="unset"
            navigationOptionsHeight1="32.5px"
            navigationOptionsWidth1="35px"
            navigationOptionsPosition1="relative"
            iconVisible={false}
            iconHeight1="unset"
            iconWidth="108px"
            iconOverflow1="unset"
            iconFontSize1="16px"
            iconTextTransform1="uppercase"
            iconFontFamily1="Inter"
            iconColor1="#fff"
            iconTextAlign1="left"
            div1
            divWidth1="unset"
            divPosition1="unset"
            divFontSize1="unset"
            divTextTransform1="unset"
            divFontFamily1="unset"
            divColor1="unset"
            divTextAlign1="unset"
            divAlignSelf1="stretch"
            divBorderRadius1="39px"
            divBackgroundColor1="rgba(38, 46, 46, 0)"
            divOverflow1="hidden"
            divFlexDirection1="row"
            divPadding1="18.7px 42px"
            divGap1="30px"
            navigationOptionsAlignSelf2="unset"
            navigationOptionsBorderRadius3="unset"
            navigationOptionsBackgroundColor3="unset"
            navigationOptionsDisplay3="unset"
            navigationOptionsFlexDirection3="unset"
            navigationOptionsPadding3="unset"
            navigationOptionsGap3="unset"
            navigationOptionsHeight2="32.6px"
            navigationOptionsWidth2="35px"
            navigationOptionsPosition2="relative"
            iconVisible1={false}
            iconHeight2="unset"
            iconWidth1="87px"
            iconOverflow2="unset"
            iconFontSize2="16px"
            iconTextTransform2="uppercase"
            iconFontFamily2="Inter"
            iconColor2="#fff"
            iconTextAlign2="left"
            div2
            divWidth2="unset"
            divPosition2="unset"
            divFontSize2="unset"
            divTextTransform2="unset"
            divFontFamily2="unset"
            divColor2="unset"
            divTextAlign2="unset"
            divAlignSelf2="stretch"
            divBorderRadius2="39px"
            divBackgroundColor2="rgba(38, 46, 46, 0)"
            divOverflow2="hidden"
            divFlexDirection2="row"
            divPadding2="17.8px 42px"
            divGap2="30px"
            navigationOptionsAlignSelf3="unset"
            navigationOptionsBorderRadius4="unset"
            navigationOptionsBackgroundColor4="unset"
            navigationOptionsDisplay4="unset"
            navigationOptionsFlexDirection4="unset"
            navigationOptionsPadding4="unset"
            navigationOptionsGap4="unset"
            navigationOptionsHeight3="34.4px"
            navigationOptionsWidth3="35px"
            navigationOptionsPosition3="relative"
            iconVisible2={false}
            iconHeight3="unset"
            iconWidth2="69px"
            iconOverflow3="unset"
            iconFontSize3="16px"
            iconTextTransform3="uppercase"
            iconFontFamily3="Inter"
            iconColor3="#fff"
            iconTextAlign3="left"
            div3
            divWidth3="unset"
            divPosition3="unset"
            divFontSize3="unset"
            divTextTransform3="unset"
            divFontFamily3="unset"
            divColor3="unset"
            divTextAlign3="unset"
            divAlignSelf3="stretch"
            divBorderRadius3="39px"
            divBackgroundColor3="rgba(38, 46, 46, 0)"
            divOverflow3="hidden"
            divFlexDirection3="row"
            divPadding3="20.7px 42px"
            divGap3="30px"
            navigationOptionsAlignSelf4="unset"
            navigationOptionsBorderRadius5="unset"
            navigationOptionsBackgroundColor5="unset"
            navigationOptionsDisplay5="unset"
            navigationOptionsFlexDirection5="unset"
            navigationOptionsPadding5="unset"
            navigationOptionsGap5="unset"
            navigationOptionsHeight4="28.6px"
            navigationOptionsWidth4="35px"
            navigationOptionsPosition4="relative"
            iconVisible3={false}
            iconHeight4="unset"
            iconWidth3="71px"
            iconOverflow4="unset"
            iconFontSize4="16px"
            iconTextTransform4="uppercase"
            iconFontFamily4="Inter"
            iconColor4="#fff"
            iconTextAlign4="left"
            div4
            divWidth4="unset"
            divPosition4="unset"
            divFontSize4="unset"
            divTextTransform4="unset"
            divFontFamily4="unset"
            divColor4="unset"
            divTextAlign4="unset"
            divAlignSelf4="stretch"
            divBorderRadius4="39px"
            divBackgroundColor4="rgba(38, 46, 46, 0)"
            divOverflow4="hidden"
            divFlexDirection4="row"
            divPadding4="20.3px 42px"
            divGap4="30px"
            navigationOptionsAlignSelf5="unset"
            navigationOptionsBorderRadius6="unset"
            navigationOptionsBackgroundColor6="unset"
            navigationOptionsDisplay6="unset"
            navigationOptionsFlexDirection6="unset"
            navigationOptionsPadding6="unset"
            navigationOptionsGap6="unset"
            navigationOptionsHeight5="29.4px"
            navigationOptionsWidth5="35px"
            navigationOptionsPosition5="relative"
            iconVisible4={false}
            iconHeight5="unset"
            iconWidth4="110px"
            iconOverflow5="unset"
            iconFontSize5="16px"
            iconTextTransform5="uppercase"
            iconFontFamily5="Inter"
            iconColor5="#fff"
            iconTextAlign5="left"
            div5
            divWidth5="unset"
            divPosition5="unset"
            divFontSize5="unset"
            divTextTransform5="unset"
            divFontFamily5="unset"
            divColor5="unset"
            divTextAlign5="unset"
            divAlignSelf5="stretch"
            divBorderRadius5="39px"
            divBackgroundColor5="rgba(38, 46, 46, 0)"
            divOverflow5="hidden"
            divFlexDirection5="row"
            divPadding5="14.4px 42px"
            divGap5="30px"
            navigationOptionsAlignSelf6="unset"
            navigationOptionsBorderRadius7="unset"
            navigationOptionsBackgroundColor7="unset"
            navigationOptionsDisplay7="unset"
            navigationOptionsFlexDirection7="unset"
            navigationOptionsPadding7="unset"
            navigationOptionsGap7="unset"
            navigationOptionsHeight6="41.2px"
            navigationOptionsWidth6="35px"
            navigationOptionsPosition6="relative"
            iconVisible5={false}
            iconHeight6="unset"
            iconWidth5="91px"
            iconOverflow6="unset"
            iconFontSize6="16px"
            iconTextTransform6="uppercase"
            iconFontFamily6="Inter"
            iconColor6="#fff"
            iconTextAlign6="left"
            div6
            divWidth6="unset"
            divPosition6="unset"
            divFontSize6="unset"
            divTextTransform6="unset"
            divFontFamily6="unset"
            divColor6="unset"
            divTextAlign6="unset"
            divAlignSelf6="stretch"
            divBorderRadius6="39px"
            divBackgroundColor6="rgba(38, 46, 46, 0)"
            divOverflow6="hidden"
            divFlexDirection6="row"
            divPadding6="17.5px 42px"
            divGap6="30px"
            navigationOptionsAlignSelf7="unset"
            navigationOptionsBorderRadius8="unset"
            navigationOptionsBackgroundColor8="unset"
            navigationOptionsDisplay8="unset"
            navigationOptionsFlexDirection8="unset"
            navigationOptionsPadding8="unset"
            navigationOptionsGap8="unset"
            navigationOptionsHeight7="35px"
            navigationOptionsWidth7="35px"
            navigationOptionsPosition7="relative"
            iconVisible6={false}
            iconHeight7="unset"
            iconWidth6="149px"
            iconOverflow7="unset"
            iconFontSize7="16px"
            iconTextTransform7="uppercase"
            iconFontFamily7="Inter"
            iconColor7="#fff"
            iconTextAlign7="left"
            div7
            divWidth7="unset"
            divPosition7="unset"
            divFontSize7="unset"
            divTextTransform7="unset"
            divFontFamily7="unset"
            divColor7="unset"
            divTextAlign7="unset"
            divAlignSelf7="stretch"
            divBorderRadius7="39px"
            divBackgroundColor7="rgba(38, 46, 46, 0)"
            divOverflow7="hidden"
            divFlexDirection7="row"
            divPadding7="19.1px 42px 19.2px"
            divGap7="30px"
            navigationOptionsAlignSelf8="unset"
            navigationOptionsBorderRadius9="unset"
            navigationOptionsBackgroundColor9="unset"
            navigationOptionsDisplay9="unset"
            navigationOptionsFlexDirection9="unset"
            navigationOptionsPadding9="unset"
            navigationOptionsGap9="unset"
            navigationOptionsHeight8="31.7px"
            navigationOptionsWidth8="35px"
            navigationOptionsPosition8="relative"
            iconVisible7={false}
            iconHeight8="unset"
            iconWidth7="136px"
            iconOverflow8="unset"
            iconFontSize8="16px"
            iconTextTransform8="uppercase"
            iconFontFamily8="Inter"
            iconColor8="#fff"
            iconTextAlign8="left"
            div8
            divWidth8="unset"
            divPosition8="unset"
            divFontSize8="unset"
            divTextTransform8="unset"
            divFontFamily8="unset"
            divColor8="unset"
            divTextAlign8="unset"
            divAlignSelf8="stretch"
            divBorderRadius8="39px"
            divBackgroundColor8="rgba(38, 46, 46, 0)"
            divOverflow8="hidden"
            divFlexDirection8="row"
            divPadding8="17.8px 42px 17.9px"
            divGap8="30px"
          />
        </section>
      </main>
      <div className="w-[99px] h-[25px] relative bg-whitesmoke-100 hidden" />
      <div className="w-[1076px] flex flex-row items-start justify-center max-w-full">
        <img
          className="h-6 w-6 relative object-contain shrink-0"
          alt=""
          src="/actions--navigation--chevronright--24@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame41;
