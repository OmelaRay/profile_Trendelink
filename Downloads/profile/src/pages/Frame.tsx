import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Input, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Button from "../components/Button";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-7 px-0 pb-0 box-border gap-14 leading-[normal] tracking-[normal] mq750:gap-7">
      <section className="w-[1354px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xs text-text-2 font-inter">
        <div className="w-[940px] flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
          <div className="self-stretch flex flex-col items-start justify-start">
            <header className="self-stretch flex flex-row items-start justify-between gap-5 text-center text-base text-main-black font-logo-font">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[80px]">
                  TrendLink
                </a>
              </div>
              <img
                className="h-[25px] w-[25px] relative object-cover"
                loading="lazy"
                alt=""
                src="/actions@2x.png"
              />
            </header>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[30px] mt-[-2px]">
              <div className="flex flex-col items-start justify-start gap-5">
                <div className="flex flex-row items-start justify-start py-0 pl-7 pr-[30px]">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <img
                      className="w-[110px] h-[110px] relative rounded-[50%] object-cover"
                      loading="lazy"
                      alt=""
                      src="/ellipse-1@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-px">
                      <div className="relative [text-decoration:underline] font-light inline-block min-w-[108px]">
                        Завантажити фото
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 text-base text-black">
                  <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
                    <b className="relative">Давиденко Наталія</b>
                  </div>
                  <div className="relative text-sm text-text-2 text-center whitespace-nowrap">
                    alesya09666@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[929px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
            <form className="m-0 flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[15px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[224px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-3">
                  <Input
                    className="bg-[transparent] self-stretch font-inter italic font-light text-xs text-text-2"
                    bordered={true}
                  />
                  <Input
                    className="bg-[transparent] self-stretch font-inter italic font-light text-xs text-text-2"
                    bordered={true}
                  />
                  <Input
                    className="bg-[transparent] self-stretch font-inter italic font-light text-xs text-text-2"
                    bordered={true}
                  />
                  <Input
                    className="bg-[transparent] self-stretch font-inter italic font-light text-xs text-text-2"
                    bordered={true}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[224px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[42px] mq450:gap-[21px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-3">
                    <div className="self-stretch flex flex-col items-start justify-start gap-1">
                      <div className="flex flex-row items-start justify-start py-0 px-2">
                        <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[34px]">
                          Стать
                        </i>
                      </div>
                      <Dropdown
                        className="self-stretch"
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
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="flex flex-row items-start justify-start py-0 px-2">
                        <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[78px]">
                          Тип аккаунту
                        </i>
                      </div>
                      <Dropdown
                        className="self-stretch"
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
                    <div className="self-stretch flex flex-col items-start justify-start gap-1">
                      <div className="flex flex-row items-start justify-start py-0 px-2">
                        <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[56px]">
                          Категорія
                        </i>
                      </div>
                      <Dropdown
                        className="self-stretch"
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
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="flex flex-row items-start justify-start py-0 px-2">
                        <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[78px]">
                          Країна, місто
                        </i>
                      </div>
                      <Dropdown
                        className="self-stretch"
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
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <Button className="self-stretch" type="primary" />
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-6">
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <img
                          className="h-[22px] w-[22px] relative min-h-[22px]"
                          loading="lazy"
                          alt=""
                          src="/group-78.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="relative text-xs font-inter text-text-2 text-left inline-block min-w-[106px]">
                            Видалити аккаунт
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[224px] mq450:gap-[15px]">
                <div className="self-stretch h-[121px] flex flex-col items-start justify-start gap-[5px]">
                  <div className="flex flex-row items-start justify-start py-0 px-2">
                    <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[58px]">
                      Про себе:
                    </i>
                  </div>
                  <Input
                    className="bg-[transparent] self-stretch flex-1 relative"
                    bordered={true}
                  />
                </div>
                <Input
                  className="bg-[transparent] self-stretch font-inter italic font-light text-xs text-text-2"
                  bordered={true}
                />
                <Input
                  className="bg-[transparent] self-stretch font-inter italic font-light text-xs text-text-2"
                  bordered={true}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="self-stretch rounded-8xs bg-gainsboro-100 flex flex-row items-start justify-between pt-[54px] px-[387px] pb-[53px] box-border max-w-full gap-5 lg:flex-wrap lg:justify-center mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[193px] mq750:pr-[193px] mq750:box-border">
        <div className="h-[141px] w-[1366px] relative rounded-8xs bg-gainsboro-100 hidden max-w-full" />
        <div className="w-[87px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-2.5">
            <img
              className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/freeiconyoutube3938026-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <Button
                propRight="51.06%"
                propLeft="0%"
                propBackgroundColor="#8da7ad"
              />
            </div>
          </div>
        </div>
        <div className="w-[87px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-2.5">
            <img
              className="h-[30px] w-[30px] relative min-h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/skilliconsinstagram1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <Button
                propRight="0%"
                propLeft="51.06%"
                propBackgroundColor="#009ea0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5">
          <img
            className="h-[34px] w-[34px] relative object-cover z-[1]"
            alt=""
            src="/freeiconsocialmedia15713399-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <Button
              propRight="51.06%"
              propLeft="0%"
              propBackgroundColor="#8da7ad"
            />
          </div>
        </div>
        <div className="w-[87px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-2.5">
            <img
              className="h-[30px] w-[30px] relative min-h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/logosfacebook.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <Button
                propRight="51.06%"
                propLeft="0%"
                propBackgroundColor="#8da7ad"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Frame;
