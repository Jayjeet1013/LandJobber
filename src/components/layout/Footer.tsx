import { Box, Button, Center, Container, Flex, Input, Stack, Text, useToast } from "@chakra-ui/react";
import Airtable from "airtable";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";


const apiId = process.env.NEXT_PUBLIC_API_BASE_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const base = new Airtable({ apiKey }).base(apiId as string);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      await base("jobyard").create([{ fields: { Email: email } }]);
      toast({
        position:'top',
        
        render: () => (
          <Box
            p={3}
            bg="green"
            border="2px solid green"
            borderRadius="md"
            color="white"
            fontWeight={600}
            textAlign="center"
          >
            <Text fontSize="lg">Success!</Text>
            <Text>You have successfully subscribed.</Text>
          </Box>
        ),
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast({
        position: 'top',
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Box bg={"#F7F7F7"}>
      <Container maxW={1300} pt={16}>
        <footer className=" py-5 ">
          <div className=" ">
            <div className="flex justify-between md:flex-row flex-col flex-wrap ">
              <div>
                <Link href={"https://www.asvaventures.com/"} target="_blank">
                 JobYard
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

                  <ul className="space-y-1 leading-6 text-sm">
                    <Link href={"/aboutus/#team"}>
                      {" "}
                      <li>Team</li>
                    </Link>
                    <Link href={"/#blog"}>
                      {" "}
                      <li>Insights & Research</li>
                    </Link>
                  </ul>
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
                  twitter
                    </a>
                    <a
                      href="https://www.linkedin.com/company/asvaventures/"
                      target="_blank"
                    >
                      {" "}
                     linkedin
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
                <Box>
          <Center>
            <form style={{ background: "transparent" }} onSubmit={handleSubmit}>
              <Stack
                direction={{ base: "row", md: "row" }}
                mb={{ base: "30px", md: "30px" }}
                bg={"transparent"}
                border="2px solid black"
                rounded={"10px"}
                justify="center"
                gap={5}
                p={2}
                align={{ base: "dow", md: "initial" }}
              >
                <Input
                  placeholder="Enter your email"
                  bg={"transparent"}
                  fontWeight="400"
                  fontSize={{ base: "16px", md: "20px" }}
                  px={{ base: "8px", md: "10px" }}
                  py={{ base: "8px", md: "12px" }}
                  type="email"
                  value={email}
                  outline="black"
                  border="black"
                  _placeholder={{ color: "black" }}
                  boxShadow="none !important"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit"  className="btn">
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
              </Stack>
            </form>
          </Center>
        </Box>
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
