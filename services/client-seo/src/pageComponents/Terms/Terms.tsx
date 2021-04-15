import { FunctionComponent } from "react";
import Main from "~/common/shared-ui/Main";
import MainContent from "~/common/shared-ui/MainContent";
import Paper from "~/common/shared-ui/Paper";
import H1 from "~/common/shared-ui/H1";
import H2 from "~/common/shared-ui/H2";
import Text from "~/common/shared-ui/Text";
import StandardSpace from "~/common/shared-ui/StandardSpace";
import Footer from "~/common/components/Footer";

const Terms: FunctionComponent = () => {
  return (
    <>
      <Main>
        <MainContent size="md">
          <Paper>
            <H1>Terms and Conditions</H1>
            <H2>Welcome to {process.env.NEXT_PUBLIC_APP_NAME}</H2>
            <Text>
              {`These terms and conditions outline the rules and regulations for the use of ${process.env.NEXT_PUBLIC_APP_NAME}'s Website.`}
            </Text>
            <StandardSpace />
            <Text>
              {`By accessing this website we assume you accept these terms and conditions in full. Do not continue to use ${process.env.NEXT_PUBLIC_APP_NAME}'s website if you do not accept all of the terms and conditions stated on this page.`}
            </Text>
            <Text>
              {`The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all
            Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and
            conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both
            the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of
            payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal
            meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision
            of the Company's stated services/products, in accordance with and subject to, prevailing law of . Any use of the above
            terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and
            therefore as referring to same.`}
            </Text>

            <StandardSpace />
            <H2>Cookies</H2>
            <Text>
              {`We employ the use of cookies. By using ${process.env.NEXT_PUBLIC_APP_NAME}'s website you consent to the use of cookies in accordance with ${process.env.NEXT_PUBLIC_APP_NAME}'s privacy policy.`}
            </Text>
            <Text>
              Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are
              used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our
              affiliate / advertising partners may also use cookies.
            </Text>

            <StandardSpace />
            <H2>License</H2>
            <Text>
              {`Unless otherwise stated, ${process.env.NEXT_PUBLIC_APP_NAME} and/or its licensors own the intellectual property rights for all material on ${process.env.NEXT_PUBLIC_APP_NAME}. All
            intellectual property rights are reserved. You may view and/or print pages from ${process.env.NEXT_PUBLIC_APP_ORIGIN} for your own personal use
            subject to restrictions set in these terms and conditions.`}
            </Text>
            <Text>You must not:</Text>
            <ol>
              <li>Republish material from {process.env.NEXT_PUBLIC_APP_ORIGIN}</li>
              <li>Sell, rent or sub-license material from {process.env.NEXT_PUBLIC_APP_ORIGIN}</li>
              <li>Reproduce, duplicate or copy material from {process.env.NEXT_PUBLIC_APP_ORIGIN}</li>
            </ol>
            <Text>
              Redistribute content from {process.env.NEXT_PUBLIC_APP_NAME} (unless content is specifically made for redistribution).
            </Text>

            <StandardSpace />
            <H2>Hyperlinking to our Content</H2>
            <ol>
              <li>
                The following organizations may link to our Web site without prior written approval:
                <ol>
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>
                    Online directory distributors when they list us in the directory may link to our Web site in the same manner as they
                    hyperlink to the Web sites of other listed businesses; and
                  </li>
                  <li>
                    Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity
                    fundraising groups which may not hyperlink to our Web site.
                  </li>
                </ol>
              </li>
            </ol>
            <ol>
              <li>
                {`These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is
              not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the linking party's site.`}
              </li>
            </ol>
            <Text>
              {`We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or
            our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of
            business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory
            record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of ${process.env.NEXT_PUBLIC_APP_NAME}; and (d) where the link is in the context of general resource information or is otherwise
            consistent with editorial content in a newsletter or similar product furthering the mission of the organization.`}
            </Text>
            <Text>
              {`These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not
            in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or
            services; and (c) fits within the context of the linking party's site.`}
            </Text>
            <Text>Approved organizations may hyperlink to our Web site as follows:</Text>
            <ol>
              <li>By use of our corporate name; or</li>
              <li>By use of the uniform resource locator (Web address) being linked to; or</li>
              <li>
                {`By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.`}
              </li>
            </ol>
            <Text>{`No use of ${process.env.NEXT_PUBLIC_APP_NAME}'s logo or other artwork will be allowed for linking absent a trademark license agreement.`}</Text>

            <StandardSpace />
            <H2>Iframes</H2>
            <Text>
              Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques
              that alter in any way the visual presentation or appearance of our Web site.
            </Text>

            <StandardSpace />
            <H2>Reservation of Rights</H2>
            <Text>
              We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our
              Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend
              these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to
              and abide by these linking terms and conditions.
            </Text>

            <StandardSpace />
            <H2>Removal of links from our website</H2>
            <Text>
              If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We
              will consider requests to remove links but will have no obligation to do so or to respond directly to you.
            </Text>
            <Text>
              Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy;
              nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
            </Text>

            <StandardSpace />
            <H2>Content Liability</H2>
            <Text>
              We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us
              against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any
              context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes,
              otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </Text>

            <StandardSpace />
            <H2>Disclaimer</H2>
            <Text>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our
              website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory
              quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:
            </Text>
            <ol>
              <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ol>
            <Text>
              The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the
              preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this
              disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
            </Text>
            <Text>
              To the extent that the website and the information and services on the website are provided free of charge, we will not be
              liable for any loss or damage of any nature.
            </Text>
          </Paper>
          <StandardSpace />
        </MainContent>
      </Main>
      <Footer />
    </>
  );
};

export default Terms;
