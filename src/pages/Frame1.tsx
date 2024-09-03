import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import ExistingEmailConfirmation from "../components/ExistingEmailConfirmation";
import ConfirmationButtons from "../components/ConfirmationButtons";
import ConfirmationOptions from "../components/ConfirmationOptions";

const Frame1: FunctionComponent = () => {
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
                    <div className="h-[35px] w-[299px] absolute !m-[0] top-[225px] left-[-30px] rounded-8xs bg-gainsboro-100" />
                    <div className="h-[101px] w-[299px] absolute !m-[0] right-[-30px] bottom-[224px] rounded-8xs bg-gainsboro-100" />
                    <Input
                      className="bg-[transparent] h-[35px] w-[299px] absolute !m-[0] bottom-[224px] left-[-30px]"
                      style={{ width: "299px" }}
                      bordered={true}
                    />
                    <i className="absolute !m-[0] bottom-[263px] left-[-22px] text-xs inline-block font-light font-inter text-text-2 text-left min-w-[56px]">
                      Прізвище
                    </i>
                    <div className="h-[35px] w-[299px] absolute !m-[0] bottom-[158px] left-[-30px] rounded-8xs bg-gainsboro-100" />
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
                    <div className="flex-1 shadow-[3px_3px_10px_2px_rgba(108,_108,_108,_0.2)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border gap-11 max-w-full z-[1] mq750:pt-[27px] mq750:box-border mq450:gap-[22px]">
                      <div className="relative text-sm font-inter text-text-2 text-center hidden whitespace-nowrap">
                        alesya09666@gmail.com
                      </div>
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[58px]">
                        Про себе:
                      </i>
                      <div className="w-[299px] h-[35px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <img
                        className="w-6 h-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[34px]">
                        Стать
                      </i>
                      <div className="w-[299px] h-[35px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <img
                        className="w-6 h-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[78px]">
                        Тип аккаунту
                      </i>
                      <div className="w-[299px] h-[35px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <img
                        className="w-6 h-6 relative object-contain hidden"
                        alt=""
                        src="/actions--navigation--chevronright--24@2x.png"
                      />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[56px]">
                        Категорія
                      </i>
                      <div className="w-[299px] h-[35px] relative rounded-8xs bg-gainsboro-100 hidden" />
                      <i className="relative text-xs hidden font-light font-inter text-text-2 text-left min-w-[78px]">
                        Країна, місто
                      </i>
                      <img
                        className="w-6 h-6 relative object-contain hidden"
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
                      <div className="self-stretch h-[550px] relative shadow-[3px_3px_10px_2px_rgba(108,_108,_108,_0.2)] rounded-xl bg-whitesmoke-100 hidden" />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[42px] pr-[45px] box-border max-w-full mq1050:pl-[21px] mq1050:pr-[22px] mq1050:box-border">
                        <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[313px] max-w-full mq750:gap-[21px]">
                            <h2 className="m-0 w-[247px] relative text-xl font-light font-inter text-main-black text-center inline-block z-[2] mq450:text-base">
                              Зміна електронної пошти
                            </h2>
                            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full">
                              <ExistingEmailConfirmation />
                              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full">
                                <div className="relative text-sm font-inter text-main-black text-center z-[2]">
                                  Введіть код, який відправленний на
                                  alesya097@gmail.com
                                </div>
                              </div>
                              <div className="w-[183px] flex flex-row items-start justify-start pt-0 px-px pb-1 box-border">
                                <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
                                  <div className="relative text-sm font-inter text-text-2 text-center inline-block min-w-[26px] z-[2]">
                                    Код
                                  </div>
                                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                                    <Input
                                      className="bg-[transparent] flex-1 font-inter text-sm text-main-black z-[2]"
                                      bordered={true}
                                    />
                                  </div>
                                  <div className="relative text-xs font-light font-inter text-crimson text-left z-[2]">
                                    Невірний код підтвердження
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-1 box-border max-w-full">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                                  <div className="relative text-sm font-inter text-main-black text-left z-[2]">
                                    Ви можете запросити код ще раз.
                                  </div>
                                  <div className="relative text-sm font-inter text-main-black text-left z-[2]">
                                    Якщо ви не отримали лист з підтвердженням,
                                    перевірте папку спам.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[119px] flex flex-col items-start justify-start pt-[94px] px-0 pb-0 box-border">
                            <div className="self-stretch h-0.5 relative border-white border-t-[2px] border-solid box-border z-[3]" />
                          </div>
                          <ConfirmationButtons />
                        </div>
                      </div>
                      <ConfirmationOptions />
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

export default Frame1;
