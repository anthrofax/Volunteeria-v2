import {
  CustomFlowbiteTheme,
  Flowbite,
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: " w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      container: "w-full p-6",
      bgDark: "bg-gray-800",
    },
    groupLink: {
      base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
      link: {
        base: "last:mr-0 md:mr-6 me-4",
        href: "hover:underline",
      },
      col: "flex-col space-y-4",
    },
    icon: {
      base: "text-gray-500 dark:hover:text-white",
      size: "h-5 w-5",
    },
    title: {
      base: "mb-6 text-base uppercase text-gray-500 dark:text-white",
    },
    divider: {
      base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
    },
    copyright: {
      base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-12",
      span: "self-center whitespace-nowrap text-3xl  text-gray-800 dark:text-white",
    },
  },
};

export default function Footer() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <FlowbiteFooter container>
        <div className="w-full text-center ">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href="/"
              src="logo-dark.svg"
              alt="Volunteeria Logo"
              name="Volunteeria"
            />
            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="Volunteeria" year={2024} />
        </div>
      </FlowbiteFooter>
    </Flowbite>
  );
}
