import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
import ConfirmationButtons from "../components/ConfirmationButtons";

const Frame4: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border gap-14 leading-[normal] tracking-[normal] mq750:gap-7">
      <section className="w-[1289px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base text-main-black font-inter">
        <div className="w-[1005px] flex flex-col items-start justify-start gap-[26px] max-w-full">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[79px]">
            TrendLink
          </a>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xs text-text-2">
            <div className="w-[919px] flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px]">
              <div className="flex flex-col items-start justify-start pt-[206px] px-0 pb-0">
                <i className="relative inline-block font-light min-w-[22px]">
                  Ім'я
                </i>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-0.5 min-w-[583px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[30px] box-border max-w-full">
                  <form className="m-0 self-stretch flex flex-row items-start justify-start relative max-w-full">
                    <Input
                      className="bg-[transparent] h-[35px] w-[299px] absolute !m-[0] top-[225px] left-[-30px]"
                      style={{ width: "299px" }}
                      bordered={true}
                    />
                    <div className="h-[101px] w-[299px] absolute !m-[0] right-[-30px] bottom-[224px] rounded-8xs bg-gainsboro-100" />
                    <Input
                      className="bg-[transparent] h-[35px] w-[299px] absolute !m-[0] bottom-[224px] left-[-30px]"
                      style={{ width: "299px" }}
                      bordered={true}
                    />
                    <i className="absolute !m-[0] bottom-[263px] left-[-22px] text-xs inline-block font-light font-inter text-text-2 text-left min-w-[56px]">
                      Прізвище
                    </i>
                    <Input
                      className="bg-[transparent] h-[35px] w-[299px] absolute !m-[0] bottom-[158px] left-[-30px]"
                      style={{ width: "299px" }}
                      bordered={true}
                    />
                    <i className="absolute !m-[0] bottom-[198px] left-[-22px] text-xs inline-block font-light font-inter text-text-2 text-left min-w-[106px]">
                      Дата народження
                    </i>
                    <Input
                      className="bg-[transparent] h-[35px] w-[299px] absolute !m-[0] bottom-[92px] left-[-30px]"
                      style={{ width: "299px" }}
                      bordered={true}
                    />
                    <i className="absolute !m-[0] bottom-[131px] left-[-22px] text-xs inline-block font-light font-inter text-text-2 text-left min-w-[99px]">
                      Номер телефону
                    </i>
                    <div className="!m-[0] absolute right-[-30px] bottom-[158px] rounded-8xs bg-gainsboro-100 overflow-x-auto flex flex-row items-start justify-start pt-1.5 pb-[5px] pl-2.5 pr-[9px] gap-[5px]">
                      <div className="h-[35px] w-[299px] relative rounded-8xs bg-gainsboro-100 shrink-0 hidden" />
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="w-[15.1px] h-[15px] relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/materialsymbolslightmailoutline.svg"
                        />
                      </div>
                      <div className="w-[230.6px] shrink-0 flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-5 box-border">
                        <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[86.6px] z-[1]">
                          Змінити пошту
                        </i>
                      </div>
                      <img
                        className="h-6 w-[24.2px] relative shrink-0 z-[1]"
                        alt=""
                        src="/actions--navigation--chevronright--241.svg"
                      />
                    </div>
                    <div className="!m-[0] absolute right-[-30px] bottom-[92px] rounded-8xs bg-gainsboro-100 overflow-x-auto flex flex-row items-start justify-start pt-1.5 pb-[5px] pl-2.5 pr-[9px] gap-[5px]">
                      <div className="h-[35px] w-[299px] relative rounded-8xs bg-gainsboro-100 shrink-0 hidden" />
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="w-[15.1px] h-[15px] relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/materialsymbolslightlockoutline.svg"
                        />
                      </div>
                      <div className="w-[230.6px] shrink-0 flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-5 box-border">
                        <i className="relative text-xs inline-block font-light font-inter text-text-2 text-left min-w-[92.6px] z-[1]">
                          Змінити пароль
                        </i>
                      </div>
                      <img
                        className="h-6 w-[24.2px] relative shrink-0 z-[1]"
                        alt=""
                        src="/actions--navigation--chevronright--241.svg"
                      />
                    </div>
                    <img
                      className="h-[110px] w-[110px] absolute !m-[0] top-[-26px] left-[378px] rounded-[50%] object-cover"
                      loading="lazy"
                      alt=""
                      src="/ellipse-1@2x.png"
                    />
                    <div className="flex-1 shadow-[3px_3px_10px_2px_rgba(108,_108,_108,_0.2)] rounded-xl bg-whitesmoke-100 flex flex-row items-start justify-start pt-[42px] px-[42px] pb-[73px] box-border max-w-full [row-gap:20px] z-[1] mq750:pt-[27px] mq750:pb-[47px] mq750:box-border mq1050:flex-wrap mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border">
                      <div className="relative text-sm font-inter text-text-2 text-center hidden whitespace-nowrap">
                        alesya09666@gmail.com
                      </div>
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[58px]">
                        Про себе:
                      </i>
                      <div className="h-[35px] w-[299px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <img
                        className="h-6 w-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[34px]">
                        Стать
                      </i>
                      <div className="h-[35px] w-[299px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <img
                        className="h-6 w-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[78px]">
                        Тип аккаунту
                      </i>
                      <div className="h-[35px] w-[299px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <img
                        className="h-6 w-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[56px]">
                        Категорія
                      </i>
                      <div className="h-[35px] w-[299px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[78px]">
                        Країна, місто
                      </i>
                      <img
                        className="h-6 w-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <b className="relative text-base hidden font-inter text-black text-left">
                        Давиденко Наталія
                      </b>
                      <div className="relative text-xs [text-decoration:underline] font-light font-inter text-text-2 text-left hidden min-w-[108px]">
                        Завантажити фото
                      </div>
                      <div className="w-[299px] rounded-20xl bg-main-green hidden flex-row items-center justify-center py-3.5 px-2.5 box-border">
                        <div className="relative text-base font-inter text-white text-left inline-block min-w-[74px]">
                          Зберегти
                        </div>
                      </div>
                      <div className="relative text-sm font-inter text-text-2 text-center hidden whitespace-nowrap">
                        alesya09666@gmail.com
                      </div>
                      <div className="h-[550px] w-[867px] relative shadow-[3px_3px_10px_2px_rgba(108,_108,_108,_0.2)] rounded-xl bg-whitesmoke-100 hidden max-w-full" />
                      <div className="flex-1 flex flex-col items-end justify-start gap-[55px] min-w-[390px] max-w-full mq750:gap-[27px] mq750:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
                          <h2 className="m-0 w-[247px] relative text-xl font-light font-inter text-main-black text-center inline-block z-[2] mq450:text-base">
                            Зміна електронної пошти
                          </h2>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                            <div className="flex-1 flex flex-row items-end justify-center max-w-full [row-gap:20px] mq750:flex-wrap">
                              <div className="flex-1 rounded-8xs bg-white flex flex-row items-start justify-center pt-3 pb-[13px] pl-[21px] pr-5 box-border min-w-[117px] z-[2]">
                                <div className="h-[54px] w-[180px] relative rounded-8xs bg-white hidden" />
                                <a className="[text-decoration:none] w-[11px] relative text-5xl font-light font-inter text-main-black text-center inline-block min-w-[11px] z-[1] mq450:text-lgi">
                                  1
                                </a>
                              </div>
                              <div className="w-[119px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border">
                                <div className="self-stretch h-0.5 relative border-white border-t-[2px] border-solid box-border z-[2]" />
                              </div>
                              <div className="flex-1 rounded-8xs bg-white flex flex-row items-start justify-center pt-3 pb-[13px] pl-[21px] pr-5 box-border min-w-[117px] z-[2]">
                                <div className="h-[54px] w-[180px] relative rounded-8xs bg-white hidden" />
                                <div className="relative text-5xl font-light font-inter text-main-black text-center inline-block min-w-[15px] z-[1] mq450:text-lgi">
                                  2
                                </div>
                              </div>
                              <div className="w-[119px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border">
                                <div className="self-stretch h-0.5 relative border-white border-t-[2px] border-solid box-border z-[2]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[404px] flex flex-row items-start justify-end pt-0 px-10 pb-[13px] box-border max-w-full">
                          <div className="flex-1 flex flex-col items-end justify-start gap-[22px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[47px] pr-[45px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
                                  <img
                                    className="h-[60px] w-[60px] relative object-cover z-[4]"
                                    loading="lazy"
                                    alt=""
                                    src="/organization--status--checkmarkfilled--32@2x.png"
                                  />
                                </div>
                                <h2 className="m-0 relative text-xl font-normal font-inter text-main-black text-center z-[4] mq450:text-base">
                                  Пошту успішно змінено
                                </h2>
                              </div>
                            </div>
                            <div className="h-[34px] relative text-sm text-main-black text-center inline-block z-[4]">
                              <p className="m-0 font-inter">{`Ви успішно змінили Email `}</p>
                              <p className="m-0">
                                <span className="font-inter">з a</span>
                                <span className="font-semibold font-inter">
                                  lesya09666@gmail.com
                                </span>
                                <span className="font-inter">{` на `}</span>
                                <span className="font-semibold font-inter">
                                  new.@gmail.com
                                </span>
                                <span className="font-inter">{` `}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-[417px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                          <Button className="z-[4]" type="primary" />
                        </div>
                      </div>
                      <ConfirmationButtons
                        propBorder="1px solid #c5c5c5"
                        propBorder1="1px solid #c5c5c5"
                      />
                    </div>
                  </form>
                </div>
                <div className="w-[863px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-[22px] w-[22px] relative min-h-[22px]"
                      loading="lazy"
                      alt=""
                      src="/group-78.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="relative inline-block min-w-[106px]">
                        Видалити аккаунт
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200 z-[2]" />
      <footer className="self-stretch rounded-8xs bg-gainsboro-100 flex flex-row items-start justify-between pt-[54px] pb-[53px] pl-[386px] pr-[387px] box-border max-w-full gap-5 lg:flex-wrap lg:justify-center mq750:pl-[193px] mq750:pr-[193px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[141px] w-[1366px] relative rounded-8xs bg-gainsboro-100 hidden max-w-full" />
        <div className="w-[82px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/freeiconyoutube3938026-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="w-[47px] h-6 relative rounded-mini bg-whitesmoke-200 z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-whitesmoke-200 w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-silver-200 w-[23px] h-6 z-[1]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[82px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/skilliconsinstagram1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="w-[47px] h-6 relative rounded-mini bg-whitesmoke-200 z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-whitesmoke-200 w-full h-full hidden" />
                <div className="absolute top-[0px] left-[24px] rounded-mini bg-main-green w-[23px] h-6 z-[1]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <img
            className="h-[34px] w-[34px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/freeiconsocialmedia15713399-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <div className="w-[47px] h-6 relative rounded-mini bg-whitesmoke-200 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-whitesmoke-200 w-full h-full hidden" />
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-silver-200 w-[23px] h-6 z-[1]" />
            </div>
          </div>
        </div>
        <div className="w-[82px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
              loading="lazy"
              alt=""
              src="/logosfacebook.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="w-[47px] h-6 relative rounded-mini bg-whitesmoke-200 z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-whitesmoke-200 w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-silver-200 w-[23px] h-6 z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Frame4;
