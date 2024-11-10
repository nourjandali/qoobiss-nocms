/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Banner } from "@/components/Banner";

export default function CookiePolicy() {
  return (
    <main>
      <Banner title="Cookies Policy" />
      <article className="prose prose-slate max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <p className="text-sm text-gray-600">Last updated on 06.11.2024</p>
        </div>
        <section className="mb-8">
          <p>
            This website uses both its own cookies and third-party cookies to
            provide visitors with the best possible browsing experience and
            services tailored to the needs and interests of each visitor.
          </p>
          <p>
            In accordance with Regulation (EU) 2016/679 of the European
            Parliament and of the Council of 27 April 2016 on the protection of
            individuals with regard to the processing of personal data and on
            the free movement of such data, and repealing Directive 95/46/EC
            ("General Data Protection Regulation") and with relevant national
            data protection legislation, all website visitors are required to
            consent before cookies are transmitted to their computers.
          </p>
          <p>
            When you visit our website, personal data is only transmitted to our
            server if you actively send such data. The only exceptions are
            technically necessary cookies, which are essential for the operation
            of our website.
          </p>
          <p>
            The web analytics tool Google Analytics is configured in such a way
            that data is recorded only anonymously and cannot be traced back to
            individual persons.
          </p>
          <p>
            All other technologies from external providers (e.g., Google Maps,
            YouTube plugins) are deactivated by default, so no data is
            transmitted to third parties when you visit our website.
          </p>
          <p>
            You have the option to accept the use of other cookies in the cookie
            banner or to allow external content to enhance the functionality and
            content of our website. In this case, third-party providers may
            obtain your personal data from you.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- What are cookies?</h3>
          <p>
            A cookie is a small text file that a website saves on your computer
            or mobile device when you visit it. Thanks to cookies, the website
            retains your actions and preferences (login, language, font size,
            and other display preferences) for a certain period of time, so you
            don't have to enter them every time you return to the website or
            navigate from one page to another.
          </p>
          <p>
            Cookies can also contain personal data, such as your IP address.
            Therefore, we only store cookies if you have explicitly allowed this
            in the cookie settings on our website. You can withdraw your consent
            for the use of cookies at any time, with future effect, by adjusting
            your browser's security settings accordingly.
          </p>
          <p>
            Exceptions are technically necessary cookies for the operation of
            our website. Without these, you cannot visit or navigate our
            website. Therefore, these cookies are generally enabled by default.
          </p>
          <p>
            Additionally, you can generally disable cookies in your browser at
            any time. This prevents the storage of cookies on your device.
            Please note that the general deactivation of cookies may lead to
            malfunctions in the use of our website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- How are cookies used?</h3>
          <p>There are three types of cookies commonly used:</p>
          <p>
            Necessary cookies: These make the website functional, providing
            basic features like navigating the website pages and accessing
            secure areas. The website cannot function properly without these
            cookies.
          </p>
          <p>
            Statistical cookies: These collect and report information
            anonymously, helping website owners understand how visitors interact
            with the website.
          </p>
          <p>
            Marketing cookies: These are used to track visitors on their
            browsing websites. The intention is to display relevant and engaging
            advertisements to each visitor, making them more valuable for the
            initial operators and third-party advertising agencies.
          </p>
          <p>
            There is also a category of Unclassified Cookies, which are still
            being classified or categorized into one of the three main
            categories.
          </p>
          <p>
            The domain{" "}
            <a
              href="https://qoobiss.com/"
              className="text-blue-600 hover:text-blue-800"
            >
              https://qoobiss.com/
            </a>{" "}
            uses 13 cookies: 4 necessary, 2 preferential, 4 statistical, and 3
            marketing.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- What are third-party cookies?</h3>
          <p>
            Certain content sections on the website may be provided through
            third parties. These third parties can place cookies through another
            website and are called "third-party cookies" because they are not
            placed by the owner of the respective website. Third-party providers
            must also comply with applicable laws and the privacy policies of
            the website owner.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- What is the lifespan of a cookie?</h3>
          <p>
            Cookies are managed by web servers. The lifespan of a cookie can
            vary significantly, depending on the purpose for which it is placed.
            Some cookies are used exclusively for a single session (session
            cookies) and are no longer retained once the visitor has left the
            website, while other cookies are retained and reused every time the
            visitor returns to that website (persistent cookies). However,
            cookies can be deleted by a visitor at any time through the browser
            settings they use.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">- How can you control cookies?</h3>
          <p className="mb-4">
            You can control and/or delete cookies as you wish – for details,
            please visit{" "}
            <a
              href="https://www.aboutcookies.org"
              className="text-blue-600 hover:text-blue-800"
            >
              https://www.aboutcookies.org
            </a>
            . You can delete all cookies from your computer and set most
            browsers to block their placement. If you do this, you may need to
            manually adjust some preferences each time you visit the website.
            Additionally, some services or features may not work.
          </p>
          <p className="mb-4">
            Useful links for controlling cookies based on your browser:
          </p>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
              className="text-blue-600 hover:text-blue-800 list-disc"
            >
              Cookies in Internet Explorer
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
              className="text-blue-600 hover:text-blue-800"
            >
              Cookies in Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en"
              className="text-blue-600 hover:text-blue-800"
            >
              Cookies in Chrome
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://help.opera.com/en/latest/web-preferences/"
              className="text-blue-600 hover:text-blue-800"
            >
              Cookies in Opera
            </a>
          </li>
          <p>
            Below you can see the specific cookies used by{" "}
            <a
              href="https://qoobiss.com/"
              className="text-blue-600 hover:text-blue-800"
            >
              https://qoobiss.com/
            </a>{" "}
            by cookie category:
          </p>
          <p className="mb-4">
            The result of the cookie scan report (,,Cookie scan report")
            generated by the module used – Cookiebot, on 17.07.2023 for the
            website{" "}
            <a
              href="https://qoobiss.com/"
              className="text-blue-600 hover:text-blue-800"
            >
              https://qoobiss.com/
            </a>{" "}
            .
          </p>
        </section>
        <div className="space-y-8">
          <section>
            <div className="rounded-lg mb-4">
              <h3 className="font-semibold">Required: 4</h3>
              <p>
                Required cookies help the website to function properly, allowing
                basic functions like page navigation and access to secure areas
                of the site. The website cannot function properly without these
                cookies.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cookie Name</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">_lscache_vary</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>2 days</TableCell>
                  <TableCell>
                    Stores the role of a registered user, typically whether it's
                    a user or a site administrator.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">CookieConsent</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>1 year</TableCell>
                  <TableCell>
                    Stores the cookie consent status for this domain.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    litespeed_docref
                  </TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTML</TableCell>
                  <TableCell>Session</TableCell>
                  <TableCell>
                    This cookie module is necessary for the operation of the
                    cache. A cache memory is used by the site to optimize the
                    response between the visitor and the website. The cache is
                    typically stored on the visitor's browsing server.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">test_cookie</TableCell>
                  <TableCell>doubleclick.net</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>1 day</TableCell>
                  <TableCell>
                    Used to check if the user's spy service accepts cookies.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Statistics Cookies Section */}
          <section>
            <div className="rounded-lg mb-4">
              <h3 className="font-semibold">Statistics: 4</h3>
              <p>
                Statistics cookies help us understand how visitors interact with
                the website by collecting and reporting information anonymously.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cookie Name</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">_ga</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>2 years</TableCell>
                  <TableCell>
                    Records a unique ID used to generate statistical data on how
                    the visitor uses the website.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ga_#</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>2 years</TableCell>
                  <TableCell>
                    Used by Google Analytics to collect data on the number of
                    times a user has visited the website, as well as dates for
                    the first and most recent visit.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">_gat</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>1 day</TableCell>
                  <TableCell>
                    Used by Google Analytics to speed up request rate.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">_gid</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>1 day</TableCell>
                  <TableCell>
                    Records a unique ID used to generate statistical data on how
                    the visitor uses the website.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Marketing Cookies Section */}
          <section>
            <div className="rounded-lg mb-4">
              <h3 className="font-semibold">Marketing: 3</h3>
              <p>
                Marketing cookies are used to track visitors across websites.
                The intention is to display ads that are relevant and engaging
                for each visitor, and thus more valuable for initial operators
                and third-party advertising agencies.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cookie Name</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">_fbp</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>3 months</TableCell>
                  <TableCell>
                    Used by Facebook to deliver a series of advertisement
                    products, such as real-time bidding from third-party
                    advertisers.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">gcl_au</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>3 months</TableCell>
                  <TableCell>
                    Used by Google AdSense to experiment with the effectiveness
                    of advertising on websites through websites that use their
                    services.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">pagead/landing</TableCell>
                  <TableCell>doubleclick.net</TableCell>
                  <TableCell>Pixel</TableCell>
                  <TableCell>Session</TableCell>
                  <TableCell>
                    Collects data on visitor behavior from multiple websites to
                    present more relevant ads. This also allows the website to
                    limit the number of times the same ad is shown to a visitor.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Preferences Cookies Section */}
          <section>
            <div className="rounded-lg mb-4">
              <h3 className="font-semibold">Preferences: 2</h3>
              <p>
                Preference cookies allow a website to remember information that
                changes the way the website behaves or looks, such as your
                preferred language or the region you are in.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cookie Name</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    CookieConsentBulkSetting-#
                  </TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTML</TableCell>
                  <TableCell>1 year</TableCell>
                  <TableCell>
                    Enables cookie awareness across multiple websites.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">pll_language</TableCell>
                  <TableCell>qoobiss.com</TableCell>
                  <TableCell>HTTP</TableCell>
                  <TableCell>1 year</TableCell>
                  <TableCell>
                    This cookie module is used to determine the visitor's
                    preferred language and set the preferred language on the
                    website, if possible.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </div>
      </article>
    </main>
  );
}
