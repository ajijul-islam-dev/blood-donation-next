// components/Footer.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-50 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <p className="flex items-center text-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@donation.com
              </p>
              <p className="flex items-center text-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                helpme@donation.com
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-start text-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Road-2.3/A East Shibgoni, Syhet-3100, Bangladesh
              </p>
              <p className="flex items-center text-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Office: (+880) 0823 560 433
              </p>
              <p className="flex items-center text-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Cell: (+880) 0723 181 343
              </p>
            </div>
          </div>

          {/* Support Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              SUPPORT LINKS
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2.5 text-neutral-100">
                  <li className="hover:text-white transition-colors">
                    Thalassemia
                  </li>
                  <li className="hover:text-white transition-colors">
                    Myelodysasia
                  </li>
                  <li className="hover:text-white transition-colors">
                    Hemolytimia
                  </li>
                  <li className="hover:text-white transition-colors">
                    Hyrocagulable
                  </li>
                  <li className="hover:text-white transition-colors">
                    Sicklenemians
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2.5 text-neutral-100">
                  <li className="hover:text-white transition-colors">
                    Cell Eldrosis
                  </li>
                  <li className="hover:text-white transition-colors">
                    Blood Count
                  </li>
                  <li className="hover:text-white transition-colors">
                    Ychromas Eosis
                  </li>
                  <li className="hover:text-white transition-colors">
                    Thrombo Xtosis
                  </li>
                  <li className="hover:text-white transition-colors">
                    Aplastic Anemia
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              SUBSCRIBE US
            </h3>
            <p className="text-neutral-100">
              Signup for regular newsletter and stay up to date with our latest
              news.
            </p>
            <form className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="bg-neutral-50 py-2 px-3 rounded-none border-neutral-200 focus-visible:ring-red-500"
                required
              />
              <Button
                type="submit"
                className="rounded-none  px-3 py-2 font-medium"
              >
                SUBSCRIBE NOW
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-red-700 mt-8 pt-6 text-center text-neutral-200 text-sm">
          <p>
            Copyright 2018 – Blood Buddies by BlueWindLab. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
