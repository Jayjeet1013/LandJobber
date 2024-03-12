import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Airtable from "airtable";
import React, { useState } from "react";

const apiId = process.env.NEXT_PUBLIC_API_BASE_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const base = new Airtable({ apiKey }).base(apiId as string);

const Connect = () => {
  const [email, setEmail] = useState("");
  const [names, setNames] = useState("");
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("");
  const [ticket, setTicket] = useState("");
  const [citizen, setCitizen] = useState("");
  const [extra, setExtra] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      await base("hashstone").create([
        {
          fields: {
            Email: email,
            Name: names,
            Status: status,
            Interest: interest,
            TicketSize: ticket,
            UsInvestor: citizen,
            ExtraDetails: extra,
          },
        },
      ]);
      toast({
        render: () => (
          <Box
            p={3}
            bg="green.300"
            borderRadius="md"
            color="white"
            fontWeight={600}
            textAlign="center"
          >
            <Text fontSize="xl" fontWeight={500}>
              Success!
            </Text>
            <Text fontSize="lg">You have Successfully Connected</Text>
          </Box>
        ),
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setNames("");
      setStatus("");
      setInterest("");
      setTicket("");
      setCitizen("");
      setExtra("");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Please Fill All Details.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Box mb={100}>
      <Container maxW={1300} id="contact">
        <div className=" bg-white  ">
          <div className="  flex flex-col md:flex-row justify-center  gap-8 md:gap-20">
            <div className="flex md:width-[1400px]  flex-col justify-center md:w-[50%]">
              <div className="text-[24px] md:text-[40px] md:leading-[50px] leading-7 p-0 font-normal text-[#111111]">
                <Text
                  p={0}
                  className="text-[24px] md:text-[40px] md:leading-[50px] leading-7 font-bold text-[#111111]"
                >
                  Connect with Us
                </Text>
              </div>

              <Text className="mt-4 text-[14px] md:text-[24px] text-[#888888]">
                Feel free to reach out to us with any inquiries regarding
                investments or any other services. Contact us for more
                information.
              </Text>
            </div>
            <div className="bg-white md:width-[600px] p-6 md:p-12 shadow-2xl shadow-gray-100 border">
              <form onSubmit={handleSubmit} className="flex  flex-col gap-8">
                <div>
                  <label
                    className="block text-sm  mb-1 leading-6 font-medium text-[#4C545A]"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    className=" h-8 flex-1 text-[black] text-[14px] px-4 py-6 border-2 w-full outline-none border-gray-300 shadow-sm "
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    placeholder="e.g., John Smith"
                    type="text"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #EDEDED",
                      background: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  />
                </div>
                <div>
                  <div>
                    <label
                      className="block  mb-1 leading-6 text-sm font-medium text-[#4C545A]"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className=" h-8 flex-1 text-[black] text-[14px]  px-4 py-6 border-2 w-full border-gray-300 shadow-sm outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., hash@gmail.com"
                      type="email"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #EDEDED",
                        background: "#FFF",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        alignSelf: "stretch",
                      }}
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6 md:space-x-6">
                  <div className="md:w-1/2 relative">
                    <label
                      className="block  mb-1 leading-6 text-sm font-medium text-[#4C545A]"
                      htmlFor="interest"
                    >
                      Investor Status:
                    </label>
                    <div>
                      <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        fontSize={"14px"}
                        className="mt-1 bg-[#FFFFFF] font-medium leading-6 text-[#C4C4C4] block w-full border-gray-300 rounded-md shadow-sm outline-none"
                        size={"lg"}
                        css={css`
                          border-radius: 10px;
                          border: 1px solid #ededed;
                          background: #fff;
                          display: flex;
                          align-items: center;
                          gap: 8px;
                          align-self: stretch;

                          &:hover {
                            border-color: #ededed; // Set the hover border color to match the regular border color
                          }

                          &:focus {
                            border-color: #ededed; // Set the focus border color to match the regular border color
                            box-shadow: none; // Remove the box shadow on focus
                          }
                        `}
                      >
                        <option value="" disabled hidden>
                          Please select
                        </option>
                        <option
                          value="Non-Accredited"
                          className="bg-[#FFFFFF] hover:bg-none text-[14px] text-[#C4C4C4] "
                        >
                          Non-Accredited
                        </option>
                        <option
                          value="Accredited Investor"
                          className="bg-[#FFFFFF] text-[14px] text-[#C4C4C4]"
                        >
                          Accredited Investor
                        </option>
                      </Select>
                    </div>
                  </div>

                  <div className="md:w-1/2 relative">
                    <label
                      className="block  mb-1 leading-6  text-sm font-medium text-[#4C545A]"
                      htmlFor="interest"
                    >
                      What are you interested in?
                    </label>
                    <div>
                      <Select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        fontSize={"14px"}
                        className="mt-1 bg-[#FFFFFF] font-medium leading-6 text-[#C4C4C4] block w-full border-gray-300 rounded-md shadow-sm outline-none"
                        size={"lg"}
                        css={css`
                          border-radius: 10px;
                          border: 1px solid #ededed;
                          background: #fff;
                          display: flex;
                          align-items: center;
                          gap: 8px;
                          align-self: stretch;

                          &:hover {
                            border-color: #ededed; // Set the hover border color to match the regular border color
                          }

                          &:focus {
                            border-color: #ededed; // Set the focus border color to match the regular border color
                            box-shadow: none; // Remove the box shadow on focus
                          }
                        `}
                      >
                        <option
                          value=""
                          disabled
                          hidden
                          className="bg-[#FFFFFF] text-[14px] text-[#C4C4C4]"
                        >
                          Please select
                        </option>

                        <option
                          value="Investing in Digital Asset Alpha Liquid Fund"
                          className="bg-[#FFFFFF] text-[#C4C4C4]"
                        >
                          Investing in Digital Asset Alpha Liquid Fund
                        </option>
                        <option
                          value="Wealth Management"
                          className="bg-[#FFFFFF] text-[14px] text-[#C4C4C4]"
                        >
                          Wealth Management
                        </option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div>
                  <Text className="text-[#4C545A] font-medium pb-1 text-[14px]">
                    Investment Ticket Size (Please specify the amount in USD)
                  </Text>
                  <input
                    value={ticket}
                    onChange={(e) => setTicket(e.target.value)}
                    className=" h-8 flex-1 px-4 text-[14px] text-black py-6 border-2 w-full outline-none border-gray-300 shadow-sm "
                    placeholder="Describe here"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #EDEDED",
                      background: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  />
                </div>

                <div>
                  <Text className="text-[#4C545A] font-medium text-[14px]">
                    {" "}
                    Are you a U.S. investor?
                  </Text>

                  <div>
                    <Select
                      value={citizen}
                      onChange={(e) => setCitizen(e.target.value)}
                      fontSize={"14px"}
                      className="mt-1 bg-[#FFFFFF] font-medium text-[#C4C4C4] block w-full border-gray-300 rounded-md shadow-sm outline-none"
                      size={"lg"}
                      css={css`
                        border-radius: 10px;
                        border: 1px solid #ededed;
                        background: #fff;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        align-self: stretch;

                        &:hover {
                          border-color: #ededed; // Set the hover border color to match the regular border color
                        }

                        &:focus {
                          border-color: #ededed; // Set the focus border color to match the regular border color
                          box-shadow: none; // Remove the box shadow on focus
                        }
                      `}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="bg-[#FFFFFF] text-[14px]  text-[#C4C4C4]"
                      >
                        Choose One
                      </option>
                      <option
                        value="Yes"
                        className="bg-[#FFFFFF] text-[14px]  text-[#C4C4C4]"
                      >
                        Yes
                      </option>
                      <option
                        value="No"
                        className="bg-[#FFFFFF] text-[14px]  text-[#C4C4C4]"
                      >
                        No
                      </option>
                    </Select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm mb-1 leading-6 font-medium text-[#4C545A]"
                    htmlFor="investment-size"
                  >
                    Anything you&apos;d like to share?
                  </label>
                  <input
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                    className=" h-8 flex-1 text-[14px] px-4 text-black py-6 border-2 w-full outline-none border-gray-300 shadow-sm "
                    placeholder="Write here"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #EDEDED",
                      background: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  />
                </div>

                <div className="flex items-center">
                  <Button
                    className=" md:mt-8 text-[16px] flex items-center gap-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #53FFBA 0.23%, #7EFE81 100.23%)",
                      color: "#111111",
                      borderRadius: "30px",
                      padding: "24px 20px",
                      fontWeight: 500,
                    }}
                    variant="default"
                    type="submit"
                  >
                    {loading ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        Let&apos;s Connect
                     
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Connect;
