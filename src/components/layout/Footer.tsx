import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    setLoading(true);
    // Step 3: Handle form submission
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || !regex.test(String(email).toLowerCase())) {
      setMessage("Please enter a valid email");
      return;
    }

    const formData = new FormData();
    formData.append("api_key", "AghazFUFk4uDrDUsquEg");
    formData.append("email", email);
    formData.append("list", "ThA5aF2Lf06cHT892osZxndQ");

    axios
      .post("https://sendy.asvalabs.com/subscribe", formData, {
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        const resData = response.data;
        if (resData.includes(`You're already subscribed!`)) {
          setMessage(`You're already subscribed!`);
        }
        if (resData.includes(`You're subscribed!`)) {
          setMessage(`You're subscribed!`);
        }
        setEmail("");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setMessage("Something went wrong!");
      });
  };
  return (
    <Box bg={"#F7F7F7"}>
      <Container maxW={1300} pt={16}>
        <footer className=" py-5 ">
          <div className=" ">
            <div className="flex justify-between md:flex-row flex-col flex-wrap ">
              <div>
                <Link href={"https://www.asvaventures.com/"} target="_blank">
                  <img
                    alt="Asva Ventures Logo"
                    height="32"
                    src="/logo.svg"
                    width="130"
                  />
                </Link>

                <p className="text-[14px] leading-6  text-[#111111] font-bold ">
                  Digital Asset investment fund
                </p>
              </div>
              <div className="py-10 md:py-0">
                <Link href={"/"}>
                  <h3 className="text-[#111111] text-[14px] font-bold mb-2 leading-6">
                    Funds and Services
                  </h3>
                </Link>

                <ul className="space-y-1 text-sm leading-6">
                  <Link href={"/#fund"}>
                    <li>Digital asset Alpha fund </li>
                  </Link>
                  <Link href={"/#treasury"}>
                    <li>Wealth Management</li>
                  </Link>
                </ul>
              </div>
              <div className="flex justify-between gap-12  flex-wrap md:py-0 pb-10">
                <div>
                  <Link href={"/aboutus"}>
                    {" "}
                    <h3 className="text-[14px] font-bold mb-2 leading-6">
                      About Us
                    </h3>
                  </Link>

                  {/* <ul className="space-y-1 leading-6 text-sm">
                    <Link href={"/aboutus/#team"}>
                      {" "}
                      <li>Team</li>
                    </Link>
                    <Link href={"/#blog"}>
                      {" "}
                      <li>Insights & Research</li>
                    </Link>
                  </ul> */}
                </div>
                <div>
                  <h3 className="text-[14px] leading-6 text-[#111111] font-bold mb-3">
                    Connect Us
                  </h3>
                  <div className="flex space-x-5">
                    <a
                      href="https://twitter.com/HashstoneGroup"
                      target="_blank"
                    >
                      {" "}
                      <img src="/twitter.svg" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/asvaventures/"
                      target="_blank"
                    >
                      {" "}
                      <img src="/linkedin.svg" />
                    </a>
                  </div>
                  <h3 className="text-[14px] font-bold mb-2 mt-6 leading-7">
                    Email:
                  </h3>
                  <div>
                    <a href="@mailto:contact@hashstonecapital.com">
                      <Text className="leading-6 text-[18px] font-normal">
                        contact@hashstonecapital.com
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[14px] leading-6 font-bold  mb-2">
                  Subscribe to Our Newsletter
                  <div className="text-[14px] leading-7 font-bold  mb-2">
                    Get the Latest Updates and Stay Informed!
                  </div>
                </div>
                <Flex gap={0} border={"1px solid #7A7A7A"} overflow={"hidden"}>
                  <Input
                    textColor={"#D9D9D9A3"}
                    placeholder="Enter your email"
                    rounded={0}
                    fontSize={16}
                    color={"black"}
                    outline={"none"}
                    border={"none"}
                    focusBorderColor="transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    px={"24px"}
                    py={"16px"}
                    rounded={0}
                    bg={"#888888"}
                    color={"#1F1F1F"}
                    fontFamily={"Autaut Grotesk-Trial"}
                    fontWeight={400}
                    onClick={handleSubscribe}
                    _hover={{ bg: "#888888" }}
                  >
                    <img width={"30px"} src="/arr.svg" />
                  </Button>
                </Flex>
                <Text color="#1F1F1F" pt={2} textAlign={"center"}>
                  {message}
                </Text>
              </div>
            </div>
            <div className="flex  justify-center items-center mt-8 border-t pt-4">
              {/* <Text className="text-[12px] font-normal leading-6 text-[#888888]">
                © 2013 Asvaventures. All Rights Reserved. Powered by Loremipsum
                Pvt Ltd
              </Text> */}
            </div>
          </div>
        </footer>
      </Container>
    </Box>
  );
};

export default Footer;
