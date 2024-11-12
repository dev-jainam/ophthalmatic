import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import footer_logo from "../assets/logo/footer_logo.png";
import Container from "./ui/container";
import FooterPhone from "./icons/round/footer-phone";
import FooterEmail from "./icons/round/footer-email";
import FooterAddress from "./icons/round/footer-address";
import Instagram from "./icons/instagram";
import Facebook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";

export default function Footer() {
  return (
    <>
      <Box className="bg-footerbg">
        <Container>
          <Flex direction="column">
            {/*  contact section   */}
            <Flex className="text-white flex-col sm:flex-row py-8 gap-8" justify='between'>
              <Flex className="w-full sm:w-3/5" gap='5'>
                <Flex gap="3" align="center" justify="start" sm="justify-center" className="flex-col md:flex-row w-full" >
                  <FooterPhone />
                  <Flex direction="column" className="items-center md:items-start">
                    <Text className="text-white text-lg text-center sm:text-start font-medium">
                      Contact
                    </Text>
                    <a className="text-sm text-center sm:text-start" href='tel:+918140259610'>
                      +91 8140259610
                    </a>
                  </Flex>
                </Flex>
                <Flex gap="3" align="center" justify="start" sm="justify-center" className="flex-col md:flex-row w-full">
                  <FooterEmail />
                  <Flex direction="column" className="items-center md:items-start">
                    <Text className="text-white text-lg text-center md:text-start font-medium">
                      Mail
                    </Text>
                    <a className="text-sm text-center sm:text-start" href='mailto:export@gadhiyagroup.com'>
                      <span>export@gadhiyagroup.com</span>
                    </a>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="w-full sm:w-2/5">
                <Flex gap="3" align="center" sm="justify-start" className="flex-col md:flex-row ps-0 lg:ps-[90px]">
                  <FooterAddress />
                  <Flex direction="column" className="items-center md:items-start text-center md:text-start">
                    <Text className="text-white text-lg font-medium">
                      Address
                    </Text>
                    <Text className="text-white text-sm ">
                      Third, 303, Fortune Sky, Nava Naroda Road, Nr. Galaxy Bunglows, Nava Naroda, Ahmedabad, Gujarat, 382345.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Separator size="4" color="green" />
            <Flex className="text-white py-8 flex-col lg:flex-row gap-2 lg:gap-[100px]">
              {/* Footer logo   */}
              <Flex direction='column' className="py-8 lg:py-0" gap='4'>
                <NavLink to="/" activeClassName="text-gray-500">
                  <img src={footer_logo} alt="Logo" className="" />
                </NavLink>
                <Text className="text-base font-medium sm:text-start text-white" >
                  ISO 9001 : 2015 Certified Company
                </Text>
              </Flex>
              <Flex className="flex-1 flex-col sm:flex-row gap-8 sm:gap-0" justify='between'>
                {/* quick links section   */}
                <Flex className="!justify-start sm:!justify-center px-0 sm:px-2">
                  <Flex className="col-span-1 lg:col-span-2  !justify-start sm:!justify-center" >
                    <Flex direction="column" gap="2" className="text-start" >
                      <Text as="h4" className="text-lg font-bold text-white mb-2 sm:mb-4" >
                        Quick Links
                      </Text>
                      <NavLink to="/" className="text-white hover:underline">
                        Home
                      </NavLink>
                      <NavLink to="/about-us" className="text-white hover:underline">
                        About Us
                      </NavLink>
                      <NavLink to="/contact" className="text-white hover:underline">
                        Contact Us
                      </NavLink>
                      <NavLink to="/contact" className="text-white hover:underline">
                        Become our dealer
                      </NavLink>
                    </Flex>
                  </Flex>
                </Flex>
                {/* our products section  */}
                <Flex className="!justify-start sm:!justify-center px-0 sm:px-2">
                  <Flex className="col-span-1 lg:col-span-2  !justify-start sm:!justify-center" >
                    <Flex direction="column" gap="2" className="text-start">
                      <Text as="h4" className="text-lg font-bold text-white mb-2 sm:mb-4" >
                        Our Products{" "}
                      </Text>
                      <NavLink to="/csr-activity" className="text-white hover:underline">
                        Ophthalmic Refraction Unit
                      </NavLink>
                      <NavLink to="/export-activity" className="text-white hover:underline" >
                        Ophthalmic Opretion Table
                      </NavLink>
                      <NavLink to="/export-activity" className="text-white hover:underline" >
                        Ophthalmic Instrument Table
                      </NavLink>
                      <NavLink to="/export-activity" className="text-white hover:underline" >
                        Arm For Phoropter
                      </NavLink>
                      <NavLink to="/export-activity" className="text-white hover:underline" >
                        Surgeon’s Chair
                      </NavLink>
                    </Flex>
                  </Flex>
                </Flex>
                {/* service and social section  */}
                <Flex className="!justify-start sm:!justify-center px-0 sm:px-2">
                  <Flex className="col-span-1 lg:col-span-2  !justify-start sm:!justify-center" >
                    <Flex direction='column' gap='5' className="text-start">
                      <Flex direction="column" gap="2">
                        <Text as="h4" className="text-lg font-bold text-white mb-2 sm:mb-4" >
                          Services
                        </Text>
                        <NavLink to="/csr-activity" className="text-white hover:underline" >
                          CSR
                        </NavLink>
                        <NavLink to="/csr-activity" className="text-white hover:underline" >
                          workshop
                        </NavLink>
                      </Flex>
                      <Flex direction='column'>
                        <Text as="h4" className="text-lg font-bold text-white" >
                          Social
                        </Text>
                        <Flex gap="5" py="4" className="!justify-center md:!justify-start">
                          <Box className="cursor-pointer">
                            <Instagram />
                          </Box>
                          <Box className="cursor-pointer">
                            <Facebook />
                          </Box>
                          <Box className="cursor-pointer">
                            <Twitter />
                          </Box>
                          <Box className="cursor-pointer">
                            <Linkedin />
                          </Box>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Separator size="4" color="green" />
            <Flex className="flex-col sm:flex-row" align="center" justify='center' py='6' >
              <Text className="text-white" size="2">
                © Ophthalmatic 2024 All right reserved.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
