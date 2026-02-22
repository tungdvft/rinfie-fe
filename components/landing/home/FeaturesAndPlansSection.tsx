"use client"

export default function FeaturesAndPlansSection() {
  const comparisonFeatures = [
    {
      title: "Multi-Layer Verification",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      rinfiePercentage: "100 %",
      otherAppPercentage: "80 %",
      rinfieWidth: "435px",
      otherAppWidth: "351px",
      rinfieImage: "/landing/union-1.svg",
      otherAppImage: "/landing/union-2.svg",
    },
    {
      title: "Smart Translation Bridge",
      description:
        "Integrated AI tools that go beyond literal words to help you understand each other's hearts.",
      rinfiePercentage: "100 %",
      otherAppPercentage: "40 %",
      rinfieWidth: "435px",
      otherAppWidth: "183px",
      rinfieImage: "/landing/union-3.svg",
      otherAppImage: "/landing/union-4.svg",
    },
    {
      title: "Engaged Mode",
      description:
        "Once both sides engage, Rinfie creates a focused space — no new matches, no distractions, just one meaningful connection.",
      rinfiePercentage: "100 %",
      otherAppPercentage: "20 %",
      rinfieWidth: "435px",
      otherAppWidth: "99px",
      rinfieImage: "/landing/union-5.svg",
      otherAppImage: "/landing/union-6.svg",
    },
    {
      title: "From Match to Meeting",
      description:
        "Rinfie is designed to guide couples beyond chat — toward real-life meetings and meaningful commitment.",
      rinfiePercentage: "100 %",
      otherAppPercentage: "80 %",
      rinfieWidth: "435px",
      otherAppWidth: "351px",
      rinfieImage: "/landing/union-7.svg",
      otherAppImage: "/landing/union-8.svg",
    },
    {
      title: "Legal & Cultural Support",
      description:
        "Expert guidance on international marriage procedures and pre-relocation orientation.",
      rinfiePercentage: "100 %",
      otherAppPercentage: "40 %",
      rinfieWidth: "435px",
      otherAppWidth: "183px",
      rinfieImage: "/landing/union-9.svg",
      otherAppImage: "/landing/union-10.svg",
    },
  ];

  const groomConcerns = [
    {
      title: "Trust & Transparency Concerns",
      description:
        "It's difficult o trust profiles without proper verification.",
      top: "33px",
      left: "0",
      image: "/landing/image-1268363829-2x.png",
      imageTop: "-131px",
      imageLeft: "234px",
    },
    {
      title: "Trust Issues with Matchmaking Services",
      description:
        "Many grooms struggle with intermediaries who prioritize speed over sincerity, leaving intentions and expectations unclear.",
      top: "-84px",
      left: "448px",
      image: "/landing/image-1268363832-2x.png",
      imageTop: "121px",
      imageLeft: "619px",
    },
    {
      title: "Unclear Path to Real-Life Meeting",
      description:
        "Chat goes on, but rarely leads to meaningful real-world progress.",
      top: "271px",
      left: "496px",
      image: "/landing/image-1268363831-2x.png",
      imageTop: "471px",
      imageLeft: "378px",
    },
    {
      title: "Too Many Options, No Direction",
      description: "Endless matching creates distraction, not connection.",
      top: "407px",
      left: "30px",
      image: "/landing/image-1268363830-2x.png",
      imageTop: "245px",
      imageLeft: "25px",
    },
  ];

  const brideConcerns = [
    {
      title: "Uncertainty About the Future",
      description: "It's hard to know if a connection can truly move forward.",
      top: "-32px",
      left: "68px",
    },
    {
      title: "Safety & Identity Concerns",
      description:
        "It's hard to feel safe without knowing who someone really is.",
      top: "-48px",
      left: "440px",
    },
    {
      title: "Pressure of Cultural Expectations",
      description: "Marriage is not just about two people, but two families.",
      top: "435px",
      left: "216px",
    },
  ];

  const verificationSteps = [
    {
      number: "1",
      title: "Identity Verifications",
      description:
        "We verify real identities to ensure every profile belongs to a real person — no fake accounts, no uncertainty.",
      icon: "/landing/solid-communication-user.svg",
      iconTop: "232px",
      iconLeft: "184px",
      top: "px",
      left: "24px",
    },
    {
      number: "2",
      title: "Education Verifications",
      description:
        "Career and work background are reviewed to provide transparency and help build trust from the start.",
      icon: "/landing/solid-status-university-2x.png",
      iconTop: "4px",
      iconLeft: "650px",
      top: "100px",
      left: "497px",
    },
    {
      number: "3",
      title: "Financial Verifications",
      description:
        "Financial information is verified to ensure stability and serious life planning — without exposing sensitive details.",
      icon: "/landing/solid-general-chart-pie-2x.png",
      iconTop: "215px",
      iconLeft: "1159px",
      top: "px",
      left: "1019px",
    },
  ];

  const journeySteps = [
    {
      number: "1",
      title: "Create Your Account",
      description: "Sign up to begin your journey on Rinfie.",
      icon: "/landing/solid-status-lightbulb-2x.png",
      iconTop: "522px",
      iconLeft: "110px",
      top: "415px",
      left: "0",
    },
    {
      number: "2",
      title: "Complete Rinfie's Verification Process",
      description:
        "Follow our step-by-step verification to build trust and unlock meaningful connections.",
      icon: "/landing/solid-status-lightbulb-3.svg",
      iconTop: "436px",
      iconLeft: "551px",
      top: "266px",
      left: "327px",
    },
    {
      number: "3",
      title: "Connect with the Community Based on Your Criteria",
      description:
        "Get matched with profiles that align with your values, preferences, and intentions.",
      icon: "/landing/solid-status-lightbulb-3.svg",
      iconTop: "343px",
      iconLeft: "1115px",
      top: "187px",
      left: "874px",
    },
    {
      number: "4",
      title: "Meet in Person at Our Curated Events",
      description:
        "Take the next step and meet in real life through Rinfie-hosted events.",
      icon: "/landing/solid-status-lightbulb-3.svg",
      iconTop: "129px",
      iconLeft: "1354px",
      top: "0",
      left: "1086px",
    },
  ];

  const testimonials = [
    {
      name: "Daniel Kim",
      quote:
        "I was hesitant at first, but the verification system gave me confidence. I met someone serious about marriage, not just chatting.",
      avatar: "/landing/rectangle-2x.png",
    },
    {
      name: "Liu Wei",
      quote:
        "What I appreciate most is the transparency. I know who I'm talking to, and that makes all the difference.",
      avatar: "/landing/rectangle-1-2x.png",
    },
    {
      name: "Chen Hao",
      quote:
        "I never thought I would find someone who shares my values so clearly. Rinfie made it possible.",
      avatar: "/landing/rectangle-4-2x.png",
    },
    {
      name: "Jae-ho Lee",
      quote: "Serious people only. That's what makes this platform different.",
      avatar: "/landing/rectangle-4-2x.png",
    },
    {
      name: "Gia Minh",
      quote: "This is not casual dating. It's a clear path toward marriage.",
      avatar: "/landing/rectangle-4-2x.png",
    },
  ];

  const stats = [
    {
      icon: "/landing/frame-2122074392.svg",
      title: "15k+ Verified Profiles",
      description:
        "Thousands of serious members trust Rinfie to find meaningful, marriage-focused relationships across borders.",
    },
    {
      icon: "/landing/frame-2122074392-1.svg",
      title: "1,000+ Destiny Moments Begun",
      description:
        "Every connection starts with intention — bringing two hearts closer across cultures.",
    },
    {
      icon: "/landing/frame-2122074392-2.svg",
      title: "10,000+ Cross-cultural Conversations",
      description:
        "Building understanding, respect, and long-term commitment between two worlds.",
    },
    {
      icon: "/landing/frame-2122074392-3.svg",
      title: "100% Id Verified Members",
      description:
        "Every approved profile completes identity verification to ensure authenticity and serious intentions.",
    },
  ];

  const plusFeatures = [
    {
      text: "View Up To ",
      highlight: "20 Bride Profiles",
      suffix: " Per Month",
    },
    {
      text: "Real-time ",
      highlight: "Translation In Chat",
      suffix: " (up To 1,000 Tokens / Month)",
    },
    {
      text: "Access To ",
      highlight: "Astrology & Compatibility Insights",
      suffix: "",
    },
    {
      text: " access To New Features Released In The Future",
      highlight: "",
      suffix: "",
    },
  ];

  const priorityFeatures = [
    {
      text: " priority Placement In Connection Waiting Lists",
      highlight: "",
      suffix: "",
    },
    {
      text: "Real-time ",
      highlight: "Translation In Chat",
      suffix: " (up To 3,000 Tokens / Month)",
    },
    {
      text: "Access To ",
      highlight: "Astrology & Compatibility Insights",
      suffix: "",
    },
    {
      text: " access To New Features Released In The Future",
      highlight: "",
      suffix: "",
    },
    { text: " priority Visibility & Support", highlight: "", suffix: "" },
  ];

  const unlimitedFeatures = [
    {
      text: "View Up To ",
      highlight: "20 Bride Profiles",
      suffix: " Per Month",
    },
    {
      text: "Real-time ",
      highlight: "Translation In Chat",
      suffix: " (up To 1,000 Tokens / Month)",
    },
    {
      text: "Access To ",
      highlight: "Astrology & Compatibility Insights",
      suffix: "",
    },
    {
      text: " access To New Features Released In The Future",
      highlight: "",
      suffix: "",
    },
    { text: " priority Visibility & Support", highlight: "", suffix: "" },
  ];

  return (
    <div id="features" className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative self-stretch w-full h-[838px]">
        <div className="flex flex-col w-[1440px] items-center justify-center gap-4 relative top-[calc(50.00%_-_385px)] left-60">
          <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#ab2744] text-4xl text-center tracking-[1.08px] leading-[46px] whitespace-nowrap">
              WHAT&#39;S MAKE RINFIE DIFFERENT ?
            </p>

            <div className="flex w-[993px] items-center justify-between relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center justify-center gap-[9.96px] relative flex-[0_0_auto]">
                <div className="relative w-[165.98px] h-[165.98px] aspect-[1] bg-[url(/landing/image-1268363825-1-2x.png)] bg-cover bg-[50%_50%]">
                  <img
                    className="absolute top-[27px] left-[30px] w-[105px] h-[111px] aspect-[0.95]"
                    alt="Image"
                    src="/landing/image-1268363826-2x.png"
                  />
                </div>

                <div className="relative flex items-center justify-center w-fit [font-family:'Poppins',Helvetica] font-bold text-[#ab2744] text-lg tracking-[0] leading-[23.9px] whitespace-nowrap">
                  RINFIE
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-[9.96px] relative flex-[0_0_auto]">
                <div className="relative w-[165.98px] h-[165.98px] aspect-[1] bg-[url(/landing/image-1268363825-1-2x.png)] bg-cover bg-[50%_50%]">
                  <img
                    className="absolute top-[27px] left-[30px] w-[105px] h-[111px] aspect-[0.95]"
                    alt="Image"
                    src="/landing/image-1268363826-1-2x.png"
                  />
                </div>

                <div className="relative flex items-center justify-center w-fit [font-family:'Poppins',Helvetica] font-bold text-[#ab2744] text-lg tracking-[0] leading-[23.9px] whitespace-nowrap">
                  OTHER DATING APP
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {comparisonFeatures.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]"
              >
                <div className="relative w-[435px] h-[35px] rotate-180">
                  <img
                    className="absolute top-0 left-0 w-[435px] h-[35px] -rotate-180"
                    alt="Union"
                    src={feature.rinfieImage}
                  />

                  <div className="left-[30px] rotate-180 absolute top-[calc(50.00%_-_12px)] font-subtile-bold-capital font-[number:var(--subtile-bold-capital-font-weight)] text-[#fdfdfd] text-[length:var(--subtile-bold-capital-font-size)] tracking-[var(--subtile-bold-capital-letter-spacing)] leading-[var(--subtile-bold-capital-line-height)] whitespace-nowrap [font-style:var(--subtile-bold-capital-font-style)]">
                    {feature.rinfiePercentage}
                  </div>
                </div>

                <div className="flex flex-col w-[348px] items-start gap-1.5 p-2 relative rounded-lg bg-[linear-gradient(180deg,rgba(252,207,217,1)_0%,rgba(254,235,239,1)_100%)]">
                  <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6 aspect-[1] object-cover"
                      alt="Image"
                      src="/landing/image-1268363827-4-2x.png"
                    />

                    <div className="relative w-fit [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#ab2744] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      {feature.title}
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#242325] text-[10px] tracking-[-0.20px] leading-[16.0px]">
                    {feature.description}
                  </p>
                </div>

                <div className="relative w-[435px] h-[35px]">
                  <img
                    className="absolute top-px left-0 w-[351px] h-[35px]"
                    alt="Union"
                    src={feature.otherAppImage}
                    style={{ width: feature.otherAppWidth }}
                  />

                  <div className="left-[42px] absolute top-[calc(50.00%_-_12px)] font-subtile-bold-capital font-[number:var(--subtile-bold-capital-font-weight)] text-[#fdfdfd] text-[length:var(--subtile-bold-capital-font-size)] tracking-[var(--subtile-bold-capital-letter-spacing)] leading-[var(--subtile-bold-capital-line-height)] whitespace-nowrap [font-style:var(--subtile-bold-capital-font-style)]">
                    {feature.otherAppPercentage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-[800px] items-center justify-between px-60 py-6 relative self-stretch w-full">
        <div className="relative w-[708px] h-[708px]">
          <div className="relative top-[calc(50.00%_-_249px)] h-[598px]">
            <img
              className="absolute top-[198px] left-[235px] w-[238px] h-[193px] aspect-[1.23]"
              alt="Union"
              src="/landing/union-11.svg"
            />

            <img
              className="absolute top-[-83px] -left-7 w-[764px] h-[764px]"
              alt="Group"
              src="/landing/group-1307.png"
            />

            {groomConcerns.map((concern, index) => (
              <div
                key={index}
                className="flex flex-col w-[268px] items-start gap-3 p-4 absolute bg-[#ffffff66] rounded-2xl border-[none] shadow-[0px_0px_20px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(220,218,218,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                style={{ top: concern.top, left: concern.left }}
              >
                <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-[#000000] text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
                    {concern.title}
                  </p>
                </div>

                <p className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                  {concern.description}
                </p>
              </div>
            ))}

            <img
              className="absolute top-[-5px] left-[172px] w-[372px] h-[371px]"
              alt="Mask group"
              src="/landing/mask-group-1-2x.png"
            />

            {groomConcerns.map((concern, index) => (
              <img
                key={`concern-img-${index}`}
                className="absolute object-cover"
                style={{
                  top: concern.imageTop,
                  left: concern.imageLeft,
                  width:
                    index === 0
                      ? "202px"
                      : index === 1
                        ? "90px"
                        : index === 2
                          ? "106px"
                          : "103px",
                  height:
                    index === 0
                      ? "202px"
                      : index === 1
                        ? "90px"
                        : index === 2
                          ? "106px"
                          : "103px",
                  aspectRatio:
                    index === 2 ? "1.01" : index === 1 ? "1.01" : "1",
                }}
                alt="Image"
                src={concern.image}
              />
            ))}
          </div>
        </div>

        <div className="relative w-[708px] h-[708px]">
          <div className="relative top-[calc(50.00%_-_268px)] h-[536px]">
            <img
              className="absolute top-[-83px] -left-7 w-[764px] h-[764px]"
              alt="Group"
              src="/landing/group-1307-1.png"
            />

            {brideConcerns.map((concern, index) => (
              <div
                key={index}
                className="flex flex-col w-[268px] items-start gap-3 p-4 absolute bg-[#ffffff66] rounded-2xl border-[none] shadow-[0px_0px_20px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(220,218,218,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                style={{ top: concern.top, left: concern.left }}
              >
                <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-[#000000] text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
                    {concern.title}
                  </div>
                </div>

                <p className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                  {concern.description}
                </p>
              </div>
            ))}

            <img
              className="absolute top-[94px] -left-2.5 w-[194px] h-[194px] aspect-[1] object-cover"
              alt="Image"
              src="/landing/image-1268363829-1-2x.png"
            />

            <img
              className="absolute top-[383px] left-[523px] w-[180px] h-48 aspect-[0.84]"
              alt="Image"
              src="/landing/image-1268363830-1-2x.png"
            />

            <img
              className="absolute top-[87px] left-[545px] w-[78px] h-20"
              alt="Image"
              src="/landing/image-1268363831-1-2x.png"
            />

            <img
              className="absolute w-[407px] h-[319px] top-[41px] left-[167px]"
              alt="Group"
              src="/landing/group-1308-2x.png"
            />
          </div>
        </div>
      </div>

      <div className="relative self-stretch w-full h-[556px]">
        <div className="absolute top-12 left-[calc(50.00%_-_335px)] [font-family:'Poppins',Helvetica] font-bold text-[#ab2744] text-4xl tracking-[1.08px] leading-[46px] whitespace-nowrap">
          A MULTI-LEVEL VERIFICATION SYSTEM
        </div>

        <div className="absolute top-[calc(50.00%_-_153px)] left-[calc(50.00%_-_720px)] w-[1440px] h-[307px]">
          {verificationSteps.map((step, index) => (
            <div
              key={index}
              className="inline-flex items-end gap-2 absolute"
              style={{ top: step.top, left: step.left }}
            >
              <div className="flex flex-col w-[300px] items-start gap-2 relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#3e3d3f] text-2xl tracking-[0] leading-[normal]">
                  {step.title}
                </div>

                <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#9c9c9d] text-sm tracking-[0] leading-[normal]">
                  {step.description}
                </p>
              </div>

              <div className="mt-[-1.00px] bg-[linear-gradient(180deg,rgba(171,39,68,1)_0%,rgba(254,235,239,0.1)_100%)] font-bold text-[138px] relative w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] text-transparent tracking-[0] leading-[normal]">
                {step.number}
              </div>
            </div>
          ))}

          <img
            className="absolute top-[78px] left-[52px] w-[1353px] h-[197px]"
            alt="Vector"
            src="/landing/vector-3.svg"
          />

          <img
            className="absolute top-[42px] left-[52px] w-[1354px] h-[266px]"
            alt="Vector"
            src="/landing/vector-5.svg"
          />

          {verificationSteps.map((step, index) => (
            <div
              key={`icon-${index}`}
              className="absolute w-[120px] h-[120px] aspect-[1]"
              style={{ top: step.iconTop, left: step.iconLeft }}
            >
              <img
                className="absolute top-[-15px] -left-2 w-36 h-[158px] aspect-[1]"
                alt="Polygon"
                src={`/landing/polygon-2${index > 0 ? `-${index}` : ""}.svg`}
              />

              <img
                className="absolute top-[calc(50.00%_-_34px)] left-[calc(50.00%_-_34px)] w-[69px] h-[69px] aspect-[1]"
                alt={`Icon ${index + 1}`}
                src={step.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[1920px] h-[800px] items-center gap-10 px-60 py-20 relative overflow-hidden">
        <div className="flex h-[468px] items-center gap-6 relative self-stretch w-full">
          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-title-bold font-[number:var(--title-bold-font-weight)] text-[#ab2744] text-[length:var(--title-bold-font-size)] text-center tracking-[var(--title-bold-letter-spacing)] leading-[var(--title-bold-line-height)] [font-style:var(--title-bold-font-style)]">
                AI-POWERED COMPATIBILITY FOR PRIORITY MEMBERS
              </p>

              <p className="relative flex items-center justify-center self-stretch h-[67.42px] font-h2-medium font-[number:var(--h2-medium-font-weight)] text-[#1a202c] text-[length:var(--h2-medium-font-size)] tracking-[var(--h2-medium-letter-spacing)] leading-[var(--h2-medium-line-height)] [font-style:var(--h2-medium-font-style)]">
                <span className="font-[number:var(--h2-medium-font-weight)] tracking-[var(--h2-medium-letter-spacing)] font-h2-medium [font-style:var(--h2-medium-font-style)] leading-[var(--h2-medium-line-height)] text-[length:var(--h2-medium-font-size)]">
                  For Priority members, Rinfie uses advanced AI to analyze{" "}
                </span>

                <span className="font-[number:var(--h2-medium-font-weight)] tracking-[var(--h2-medium-letter-spacing)] font-h2-medium [font-style:var(--h2-medium-font-style)] leading-[var(--h2-medium-line-height)] text-[length:var(--h2-medium-font-size)]">
                  numerology insights
                </span>

                <span className="font-[number:var(--h2-medium-font-weight)] tracking-[var(--h2-medium-letter-spacing)] font-h2-medium [font-style:var(--h2-medium-font-style)] leading-[var(--h2-medium-line-height)] text-[length:var(--h2-medium-font-size)]">
                  {" "}
                  and{" "}
                </span>

                <span className="font-[number:var(--h2-medium-font-weight)] tracking-[var(--h2-medium-letter-spacing)] font-h2-medium [font-style:var(--h2-medium-font-style)] leading-[var(--h2-medium-line-height)] text-[length:var(--h2-medium-font-size)]">
                  personality assessments
                </span>

                <span className="font-[number:var(--h2-medium-font-weight)] tracking-[var(--h2-medium-letter-spacing)] font-h2-medium [font-style:var(--h2-medium-font-style)] leading-[var(--h2-medium-line-height)] text-[length:var(--h2-medium-font-size)]">
                  {" "}
                  — helping you discover deeper compatibility beyond surface
                  attraction. Love isn&apos;t random. It&apos;s aligned.
                </span>
              </p>
            </div>

            <div className="relative self-stretch w-full h-[258px]" />
          </div>
        </div>

        <img
          className="absolute top-[247px] left-[535px] w-[943px] h-[553px] aspect-[1] object-cover"
          alt="Element"
          src="/landing/image-194491479-1.png"
        />

        <div className="absolute top-[195px] left-[232px] w-[1560px] h-[830px]">
          <img
            className="absolute top-[360px] left-[255px] w-[237px] h-[245px] aspect-[0.76]"
            alt="Image"
            src="/landing/image-1268363841-2x.png"
          />

          <img
            className="absolute top-px left-[934px] w-[258px] h-[258px] aspect-[1] object-cover"
            alt="Image"
            src="/landing/image-1268363842-2x.png"
          />

          <img
            className="absolute top-[586px] left-[674px] w-[244px] h-[19px] aspect-[1] object-cover"
            alt="Image"
            src="/landing/image-1268363843-2x.png"
          />

          <img
            className="absolute top-8 left-0 w-[374px] h-[374px] aspect-[1] object-cover"
            alt="Image"
            src="/landing/image-1268363844-2x.png"
          />

          <img
            className="absolute top-8 left-[1084px] w-[476px] h-[476px] aspect-[1] object-cover"
            alt="Image"
            src="/landing/image-1268363845-2x.png"
          />

          <img
            className="absolute top-[378px] left-[985px] w-[261px] h-[227px] aspect-[1] object-cover"
            alt="Image"
            src="/landing/image-1268363846-2x.png"
          />

          <img
            className="absolute top-[101px] left-[374px] w-[159px] h-[159px] aspect-[1] object-cover"
            alt="Image"
            src="/landing/image-1268363847-2x.png"
          />
        </div>
      </div>

      <div id="pricing" className="flex w-full max-w-[1920px] mx-auto items-start flex-col relative flex-[0_0_auto] overflow-hidden">
        <div className="h-[calc(100%_-_1px)] top-0 left-0 overflow-hidden bg-[linear-gradient(0deg,rgba(171,39,68,1)_0%,rgba(108,25,43,1)_100%)] absolute w-full">
          <div className="relative top-[-502px] left-[-117px] w-[2046px] h-[2588px] rotate-[-90.00deg] mix-blend-lighten">
            <div className="absolute top-[1487px] left-[815px] w-[1041px] h-[1101px] bg-[#ef7e87] rounded-[520.5px/550.5px] blur-[349.56px] opacity-50" />

            <div className="absolute top-[346px] left-[1005px] w-[1041px] h-[1141px] bg-[#f13760] rounded-[520.5px/570.5px] blur-[349.56px] opacity-40" />

            <div className="absolute top-0 left-px w-[769px] h-[746px] bg-[#f07e87] rounded-[384.5px/373px] blur-[365.45px]" />
          </div>
        </div>

        <div className="min-h-[976px] justify-center pt-14 pb-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center gap-4 relative self-stretch w-full max-w-[1920px] mx-auto">
          <img
            className="absolute top-[calc(50.00%_-_455px)] right-[-213px] w-[454px] h-[1000px] pointer-events-none select-none"
            alt=""
            aria-hidden
            src="/landing/mask-group-2.png"
          />

          <img
            className="absolute top-56 left-0 w-[421px] h-[696px] pointer-events-none select-none"
            alt=""
            aria-hidden
            src="/landing/mask-group-3.png"
          />

          <div className="h-[88px] relative w-full max-w-[809px] px-2">
            <div className="flex flex-col w-full items-center relative">
              <p className="relative flex items-center justify-center w-full mt-[-1.00px] font-bold text-[#fdfdfd] text-2xl sm:text-3xl md:text-4xl text-center tracking-[0] leading-tight">
                PRICING &amp; PLANS FOR GENTLEMEN
              </p>

              <p className="relative flex items-center justify-center self-stretch font-normal text-[#fdfdfd] text-sm text-center tracking-[0] leading-snug">
                Choose The Level Of Access That Matches Your Intention And
                Journey. All Plans Are Designed To Support Respectful, Serious,
                And Transparent Connections. No Hidden Intermediaries. No Unclear
                Intentions.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 px-4 py-0 relative w-full max-w-[1400px] mx-auto">
            <div className="inline-flex items-start justify-between p-4 min-w-0 flex-1 max-w-[420px] bg-[#ffffff66] rounded-3xl border border-[rgba(199,199,199,0.5)] shadow-[4px_4px_20px_#891f37] backdrop-blur-[10px] flex-col relative">
              <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch z-10">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(223,7,76,1)_0%,rgba(152,7,29,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-black text-transparent text-2xl tracking-[1.20px] leading-[26px]">
                    Rinfie Plus +
                  </div>

                  <p className="relative flex items-center justify-center self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#242325] text-sm tracking-[0] leading-[normal]">
                    Designed For Grooms Ready To Engage More Deeply And
                    Communicate Clearly Across Cultures.
                  </p>
                </div>

                <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="flex items-center justify-center mt-[-1.00px] bg-[linear-gradient(0deg,rgba(88,2,2,1)_0%,rgba(198,0,112,1)_100%)] font-extrabold text-[68px] whitespace-nowrap relative w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] text-transparent tracking-[0] leading-[normal]">
                      20
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="bg-[linear-gradient(0deg,rgba(88,2,2,1)_0%,rgba(198,0,112,1)_100%)] relative flex items-center justify-center w-fit mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-extrabold text-transparent text-[68px] tracking-[0] leading-[normal] whitespace-nowrap">
                      $
                    </div>
                  </div>

                  <div className="text-[#fdfdfd] relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    /month
                  </div>
                </div>

                <button className="all-[unset] box-border flex min-w-[168px] px-4 py-2.5 self-stretch w-full flex-[0_0_auto] rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-subtile-semi-capital font-[number:var(--subtile-semi-capital-font-weight)] text-[#fdfdfd] text-[length:var(--subtile-semi-capital-font-size)] text-center tracking-[var(--subtile-semi-capital-letter-spacing)] leading-[var(--subtile-semi-capital-line-height)] whitespace-nowrap [font-style:var(--subtile-semi-capital-font-style)]">
                    Subscriptions Now
                  </div>
                </button>

                <img
                  className="w-full max-w-[400px] h-px relative object-cover"
                  alt="Line"
                  src="/landing/line-1-2.svg"
                />

                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch">
                  {plusFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="items-center justify-center gap-2.5 w-full flex-[0_0_auto] flex relative self-stretch"
                    >
                      <img
                        className="relative w-9 h-9 aspect-[1] object-cover"
                        alt="Image"
                        src="/landing/image-1268363834-13-2x.png"
                      />

                      <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[26px]">
                        {feature.text && (
                          <span className="text-[#242325]">{feature.text}</span>
                        )}
                        {feature.highlight && (
                          <span className="font-bold text-[#6a0b1a]">
                            {feature.highlight}
                          </span>
                        )}
                        {feature.suffix && (
                          <span className="text-[#242325]">
                            {feature.suffix}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <img
                  className="w-full max-w-[400px] h-px relative object-cover"
                  alt="Line"
                  src="/landing/line-1-2.svg"
                />
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#242325] text-base tracking-[0] leading-[26px]">
                  Choose Your Plan Durations:
                </div>

                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch">
                  <div className="flex items-center gap-3 px-3 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff33] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(0deg,rgba(190,190,190,1)_0%,rgba(236,229,229,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <div className="w-fit text-[#242325] relative flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
                      06 months
                    </div>

                    <img
                      className="w-px h-[31px] relative object-cover"
                      alt="Line"
                      src="/landing/line-3-1.svg"
                    />

                    <div className="bg-[linear-gradient(0deg,rgba(88,2,2,1)_0%,rgba(198,0,112,1)_100%)] relative flex items-center justify-center w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal]">
                      {" "}
                      98$
                    </div>

                    <button className="all-[unset] box-border flex min-w-[138px] h-9 p-2 flex-1 grow rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                      <div className="text-[#fdfdfd] text-[length:var(--body-semibold-font-size)] leading-[var(--body-semibold-line-height)] relative flex items-center justify-center w-fit mt-[-1.00px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-center tracking-[var(--body-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-font-style)]">
                        Get Started
                      </div>
                    </button>

                    <div className="inline-flex items-center justify-center gap-1 px-3 py-1 absolute -top-3 left-[calc(50.00%_+_67px)] rounded-[99px] bg-[linear-gradient(180deg,rgba(135,215,8,1)_0%,rgba(14,234,14,1)_100%)]">
                      <img
                        className="relative w-4 h-4 aspect-[1]"
                        alt="Badget solid"
                        src="/landing/badget-solid-1.svg"
                      />

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-small-semibold font-[number:var(--small-semibold-font-weight)] text-[#000000] text-[length:var(--small-semibold-font-size)] text-center tracking-[var(--small-semibold-letter-spacing)] leading-[var(--small-semibold-line-height)] whitespace-nowrap [font-style:var(--small-semibold-font-style)]">
                        Best Popular
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-3 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff33] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(0deg,rgba(190,190,190,1)_0%,rgba(236,229,229,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <div className="w-32 text-[#242325] relative flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
                      12 months
                    </div>

                    <img
                      className="w-px h-[31px] relative object-cover"
                      alt="Line"
                      src="/landing/line-3-1.svg"
                    />

                    <div className="bg-[linear-gradient(0deg,rgba(88,2,2,1)_0%,rgba(198,0,112,1)_100%)] relative flex items-center justify-center w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal]">
                      {" "}
                      218$
                    </div>

                    <button className="all-[unset] box-border flex min-w-[138px] h-9 p-2 flex-1 grow rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                      <div className="text-[#fdfdfd] text-[length:var(--body-semibold-font-size)] leading-[var(--body-semibold-line-height)] relative flex items-center justify-center w-fit mt-[-1.00px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-center tracking-[var(--body-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-font-style)]">
                        Get Started
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#eb0ce44c] inline-flex flex-col items-center gap-4 p-4 relative min-w-0 flex-1 max-w-[420px] rounded-3xl border border-[rgba(218,75,185,0.5)] shadow-[4px_4px_20px_#891f37] backdrop-blur-[10px]">
              <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch z-10">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,246,202,1)_0%,rgba(255,237,154,1)_65%,rgba(251,210,136,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-black text-transparent text-2xl tracking-[1.20px] leading-[26px]">
                    Rinfie Priority
                  </div>

                  <p className="relative flex items-center justify-center self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#dedede] text-sm tracking-[0] leading-[normal]">
                    Designed For Grooms Ready To Engage More Deeply And
                    Communicate Clearly Across Cultures.
                  </p>
                </div>

                <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="flex items-center justify-center mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,246,202,1)_0%,rgba(255,237,154,1)_65%,rgba(251,210,136,1)_100%)] font-extrabold text-[68px] whitespace-nowrap relative w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] text-transparent tracking-[0] leading-[normal]">
                      30
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="bg-[linear-gradient(180deg,rgba(255,246,202,1)_0%,rgba(255,237,154,1)_65%,rgba(251,210,136,1)_100%)] relative flex items-center justify-center w-fit mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-extrabold text-transparent text-[68px] tracking-[0] leading-[normal] whitespace-nowrap">
                      $
                    </div>
                  </div>

                  <div className="text-[#dedede] relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    /month
                  </div>
                </div>

                <button className="all-[unset] box-border flex min-w-[168px] px-4 py-2.5 self-stretch w-full flex-[0_0_auto] rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                  <div className="text-[#dedede] text-[length:var(--subtile-semi-capital-font-size)] leading-[var(--subtile-semi-capital-line-height)] relative flex items-center justify-center w-fit mt-[-1.00px] font-subtile-semi-capital font-[number:var(--subtile-semi-capital-font-weight)] text-center tracking-[var(--subtile-semi-capital-letter-spacing)] whitespace-nowrap [font-style:var(--subtile-semi-capital-font-style)]">
                    Subscriptions Now
                  </div>
                </button>

                <img
                  className="w-full max-w-[400px] h-px relative object-cover"
                  alt="Line"
                  src="/landing/line-1-2.svg"
                />

                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch">
                  {priorityFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="items-center justify-center gap-2.5 w-full flex-[0_0_auto] flex relative self-stretch"
                    >
                      <img
                        className="relative w-9 h-9 aspect-[1] object-cover"
                        alt="Image"
                        src="/landing/image-1268363834-13-2x.png"
                      />

                      <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[26px]">
                        {feature.text && (
                          <span className="text-[#dedede]">{feature.text}</span>
                        )}
                        {feature.highlight && (
                          <span className="font-bold text-[#f9a9bb]">
                            {feature.highlight}
                          </span>
                        )}
                        {feature.suffix && (
                          <span className="text-[#dedede]">
                            {feature.suffix}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <img
                  className="w-full max-w-[400px] h-px relative object-cover"
                  alt="Line"
                  src="/landing/line-1-2.svg"
                />
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#dedede] text-base tracking-[0] leading-[26px]">
                  Choose Your Plan Durations:
                </div>

                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch">
                  <div className="flex items-center gap-3 px-3 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff33] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(0deg,rgba(190,190,190,1)_0%,rgba(236,229,229,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <div className="w-fit text-[#dedede] relative flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
                      06 months
                    </div>

                    <img
                      className="w-px h-[31px] relative object-cover"
                      alt="Line"
                      src="/landing/line-3-3.svg"
                    />

                    <div className="bg-[linear-gradient(180deg,rgba(255,246,202,1)_0%,rgba(255,237,154,1)_65%,rgba(251,210,136,1)_100%)] relative flex items-center justify-center w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal]">
                      {" "}
                      98$
                    </div>

                    <button className="all-[unset] box-border flex min-w-[138px] h-9 p-2 flex-1 grow rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                      <div className="text-[#dedede] text-[length:var(--body-semibold-font-size)] leading-[var(--body-semibold-line-height)] relative flex items-center justify-center w-fit mt-[-1.00px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-center tracking-[var(--body-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-font-style)]">
                        Get Started
                      </div>
                    </button>

                    <div className="inline-flex items-center justify-center gap-1 px-3 py-1 absolute -top-3 left-[calc(50.00%_+_67px)] rounded-[99px] bg-[linear-gradient(180deg,rgba(135,215,8,1)_0%,rgba(14,234,14,1)_100%)]">
                      <img
                        className="relative w-4 h-4 aspect-[1]"
                        alt="Badget solid"
                        src="/landing/badget-solid-1.svg"
                      />

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-small-semibold font-[number:var(--small-semibold-font-weight)] text-[#000000] text-[length:var(--small-semibold-font-size)] text-center tracking-[var(--small-semibold-letter-spacing)] leading-[var(--small-semibold-line-height)] whitespace-nowrap [font-style:var(--small-semibold-font-style)]">
                        Best Popular
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-3 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff33] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(0deg,rgba(190,190,190,1)_0%,rgba(236,229,229,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <div className="w-32 text-[#dedede] relative flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
                      12 months
                    </div>

                    <img
                      className="w-px h-[31px] relative object-cover"
                      alt="Line"
                      src="/landing/line-3-3.svg"
                    />

                    <div className="bg-[linear-gradient(180deg,rgba(255,246,202,1)_0%,rgba(255,237,154,1)_65%,rgba(251,210,136,1)_100%)] relative flex items-center justify-center w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal]">
                      {" "}
                      218$
                    </div>

                    <button className="all-[unset] box-border flex min-w-[138px] h-9 p-2 flex-1 grow rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                      <div className="text-[#dedede] text-[length:var(--body-semibold-font-size)] leading-[var(--body-semibold-line-height)] relative flex items-center justify-center w-fit mt-[-1.00px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-center tracking-[var(--body-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-font-style)]">
                        Get Started
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch bg-[#ffffff66] inline-flex flex-col items-center gap-4 p-4 relative min-w-0 flex-1 max-w-[420px] rounded-3xl border border-[rgba(199,199,199,0.6)] shadow-[4px_4px_20px_#891f37] backdrop-blur-[10px]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-10">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(121,224,255,1)_0%,rgba(187,206,220,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-black text-transparent text-2xl tracking-[1.20px] leading-[26px]">
                  Unlimited Lifetime
                </div>

                <p className="relative flex items-center justify-center self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#242325] text-sm tracking-[0] leading-[normal]">
                  Designed For Grooms Ready To Engage More Deeply And
                  Communicate Clearly Across Cultures.
                </p>
              </div>

              <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <div className="flex items-center justify-center mt-[-1.00px] bg-[linear-gradient(0deg,rgba(88,2,2,1)_0%,rgba(198,0,112,1)_100%)] font-extrabold text-[68px] whitespace-nowrap relative w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] text-transparent tracking-[0] leading-[normal]">
                    999
                  </div>
                </div>

                <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <div className="bg-[linear-gradient(0deg,rgba(88,2,2,1)_0%,rgba(198,0,112,1)_100%)] relative flex items-center justify-center w-fit mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-extrabold text-transparent text-[68px] tracking-[0] leading-[normal] whitespace-nowrap">
                    $
                  </div>
                </div>

                <div className="text-[#fdfdfd] relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  /month
                </div>
              </div>

              <button className="all-[unset] box-border flex min-w-[168px] px-4 py-2.5 self-stretch w-full flex-[0_0_auto] rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-subtile-semi-capital font-[number:var(--subtile-semi-capital-font-weight)] text-[#fdfdfd] text-[length:var(--subtile-semi-capital-font-size)] text-center tracking-[var(--subtile-semi-capital-letter-spacing)] leading-[var(--subtile-semi-capital-line-height)] whitespace-nowrap [font-style:var(--subtile-semi-capital-font-style)]">
                  Get It Now
                </div>
              </button>

              <img
                className="w-full max-w-[400px] h-px relative object-cover"
                alt="Line"
                src="/landing/line-1-2.svg"
              />

              <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative self-stretch">
                {unlimitedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="items-center justify-center gap-2.5 w-full flex-[0_0_auto] flex relative self-stretch"
                  >
                    <img
                      className="relative w-9 h-9 aspect-[1] object-cover"
                      alt="Image"
                      src="/landing/image-1268363834-13-2x.png"
                    />

                    <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[26px]">
                      {feature.text && (
                        <span className="text-[#242325]">{feature.text}</span>
                      )}
                      {feature.highlight && (
                        <span className="font-bold text-[#6a0b1a]">
                          {feature.highlight}
                        </span>
                      )}
                      {feature.suffix && (
                        <span className="text-[#242325]">{feature.suffix}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[800px] px-60 py-6 flex flex-col items-center gap-4 relative self-stretch w-full">
          <div className="h-[46px] relative w-[809px]">
            <div className="flex flex-col w-[809px] items-center gap-3 relative">
              <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#fdfdfd] text-4xl text-center tracking-[0] leading-[46px] whitespace-nowrap">
                HOW TO START YOUR JOURNEY ?
              </p>
            </div>
          </div>

          <div className="relative w-[1440px] h-[623.05px]">
            <img
              className="absolute top-[167px] left-[151px] w-[1263px] h-[452px]"
              alt="Vector"
              src="/landing/vector-5-1.svg"
            />

            <img
              className="absolute top-[145px] left-[154px] w-[1276px] h-[479px]"
              alt="Vector"
              src="/landing/vector-6.svg"
            />

            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="inline-flex items-end absolute"
                style={{ top: step.top, left: step.left }}
              >
                <div
                  className={`flex ${index === 1 || index === 2 || index === 3 ? "w-[272px]" : "w-[260px]"} flex-col items-start gap-2 relative`}
                >
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fdfdfd] text-2xl tracking-[0] leading-[normal]">
                    {step.title}
                  </p>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#fdfdfd] text-sm tracking-[0] leading-[normal]">
                    {step.description}
                  </p>
                </div>

                <div
                  className={`${index === 0 ? "mt-[-1.00px]" : ""} bg-[linear-gradient(180deg,rgba(255,186,202,1)_0%,rgba(254,235,239,0.3)_100%)] font-bold text-[138px] whitespace-nowrap relative w-fit [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] text-transparent tracking-[0] leading-[normal]`}
                >
                  {step.number}
                </div>
              </div>
            ))}

            {journeySteps.map((step, index) => (
              <div
                key={`journey-icon-${index}`}
                className="absolute w-[86px] h-[86px] shadow-[0px_0px_16px_#3b0101b2] aspect-[1]"
                style={{ top: step.iconTop, left: step.iconLeft }}
              >
                <img
                  className={`${index === 0 || index === 2 || index === 3 ? "-top-1 left-px w-[88px] h-[98px]" : "top-px left-1.5 w-[74px] h-[84px]"} absolute aspect-[1]`}
                  alt="Polygon"
                  src={`/landing/polygon-2-${index + 3}.svg`}
                />

                <img
                  className="absolute top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] w-9 h-9 aspect-[1]"
                  alt="Icon"
                  src={step.icon}
                />
              </div>
            ))}
          </div>

          <img
            className="absolute top-0 left-0 w-[1000px] h-[800px]"
            alt="Group"
            src="/landing/group-1307-2.png"
          />

          <img
            className="absolute top-[317px] left-[1004px] w-[916px] h-[483px]"
            alt="Group"
            src="/landing/group-1310.png"
          />

          <img
            className="absolute top-16 left-[152px] w-[498px] h-[394px]"
            alt="Mask group"
            src="/landing/mask-group-4-2x.png"
          />
        </div>
      </div>

      <div className="flex flex-col w-[1920px] items-center justify-center gap-10 px-60 py-20 relative flex-[0_0_auto]">
        <div className="flex h-[468px] items-center gap-6 relative self-stretch w-full">
          <div className="relative self-stretch w-[708px] rounded-3xl bg-[url(/landing/rectangle-23796.png)] bg-[100%_100%]" />

          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-title-bold font-[number:var(--title-bold-font-weight)] text-[#ab2744] text-[length:var(--title-bold-font-size)] tracking-[var(--title-bold-letter-spacing)] leading-[var(--title-bold-line-height)] [font-style:var(--title-bold-font-style)]">
                WHERE VERIFIED HEARTS FIND THEIR FUTURE.
              </p>

              <p className="relative flex items-center justify-center self-stretch h-[67.42px] font-subtile-regular-capital font-[number:var(--subtile-regular-capital-font-weight)] text-[#1a202c] text-[length:var(--subtile-regular-capital-font-size)] tracking-[var(--subtile-regular-capital-letter-spacing)] leading-[var(--subtile-regular-capital-line-height)] [font-style:var(--subtile-regular-capital-font-style)]">
                Real Stories From Members Who Chose Commitment Over Casual
                Dating.
                <br />
                through Structured Matching And Identity Verification, Rinfie
                Creates A Space Where Love Begins With Trust.
              </p>
            </div>

            <div className="flex items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? "w-[488px]" : index === 1 ? "w-[453.33px] mr-[-281.33px]" : "w-[488px] mr-[-817.33px]"} flex h-[242px] items-start justify-end gap-4 p-6 relative bg-[#fdfdfd] rounded-3xl border border-solid border-[#f2f2f2] shadow-[0px_0px_20px_#891f371a]`}
                >
                  <img
                    className={`${index > 1 ? "mt-[-6003.71px] ml-[-2326.33px]" : ""} ${index === 3 ? "ml-[-2862.33px]" : ""} ${index === 4 ? "ml-[-3398.33px]" : ""} ${index === 1 ? "object-cover" : ""} relative w-12 h-12`}
                    alt="Rectangle"
                    src={testimonial.avatar}
                  />

                  <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                    <img
                      className={`${index > 1 ? "ml-[-2414.33px] mt-[-6027.71px]" : ""} ${index === 3 ? "ml-[-2950.33px]" : ""} ${index === 4 ? "ml-[-3486.33px]" : ""} relative w-6 h-6 aspect-[1]`}
                      alt="Quote left svgrepo"
                      src="/landing/quote-left-svgrepo-com-1-1.svg"
                    />

                    <p className="relative self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-[#3e3d3f] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-h2-semi-capital font-[number:var(--h2-semi-capital-font-weight)] text-[#242325] text-[length:var(--h2-semi-capital-font-size)] tracking-[var(--h2-semi-capital-letter-spacing)] leading-[var(--h2-semi-capital-line-height)] whitespace-nowrap [font-style:var(--h2-semi-capital-font-style)]">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex w-11 h-11 px-4 py-2 bg-white rounded-lg shadow-button aspect-[1] items-center justify-center gap-1.5 relative">
                <img
                  className="w-6 h-6 ml-[-6.00px] mr-[-6.00px] relative aspect-[1]"
                  alt="Icon left"
                  src="/landing/icon-left.svg"
                />
              </div>

              <div className="flex w-11 h-11 px-4 py-2 bg-white rounded-lg shadow-button aspect-[1] items-center justify-center gap-1.5 relative">
                <img
                  className="w-6 h-6 ml-[-6.00px] mr-[-6.00px] relative aspect-[1]"
                  alt="Icon left"
                  src="/landing/icon-left-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1440px] items-center justify-center gap-2.5 px-0 py-16 relative flex-[0_0_auto]">
        <div className="flex h-72 items-center gap-[68px] p-6 relative self-stretch w-full rounded-3xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-col items-center justify-between flex-1 grow flex relative self-stretch"
            >
              <img
                className="relative w-16 h-16 aspect-[1]"
                alt="Frame"
                src={stat.icon}
              />

              <div
                className={`flex flex-col ${index === 0 ? "h-[142px]" : "h-[142px]"} items-start ${index === 0 ? "gap-[18px]" : "gap-2.5"} relative self-stretch w-full`}
              >
                <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-title-bold-capital font-[number:var(--title-bold-capital-font-weight)] text-[#cd2f52] text-[length:var(--title-bold-capital-font-size)] tracking-[var(--title-bold-capital-letter-spacing)] leading-[var(--title-bold-capital-line-height)] [font-style:var(--title-bold-capital-font-style)]">
                  <span className="font-[number:var(--title-bold-capital-font-weight)] tracking-[var(--title-bold-capital-letter-spacing)] font-title-bold-capital [font-style:var(--title-bold-capital-font-style)] leading-[var(--title-bold-capital-line-height)] text-[length:var(--title-bold-capital-font-size)]">
                    {stat.title.split(" ")[0]}{" "}
                  </span>

                  <span className="tracking-[var(--title-bold-capital-letter-spacing)] font-title-bold-capital [font-style:var(--title-bold-capital-font-style)] font-[number:var(--title-bold-capital-font-weight)] leading-[var(--title-bold-capital-line-height)] text-[length:var(--title-bold-capital-font-size)]">
                    {stat.title.split(" ").slice(1).join(" ")}
                  </span>
                </p>

                <p className="relative flex items-center justify-center self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-[#3e3d3f] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[1920px] h-[800px] items-center gap-6 px-60 py-6 relative">
        <div className="relative self-stretch w-full h-[113.42px] mr-[-4.00px]">
          <p className="absolute top-0 left-0 w-[1440px] h-[46px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#ab2744] text-4xl text-center tracking-[1.08px] leading-[46px]">
            YOUR FUTURE BEGINS WITH ONE DOWNLOAD
          </p>

          <p className="absolute top-[46px] left-60 w-[960px] h-[67px] flex items-center justify-center font-subtile-regular-capital font-[number:var(--subtile-regular-capital-font-weight)] text-[#1a202c] text-[length:var(--subtile-regular-capital-font-size)] text-center tracking-[var(--subtile-regular-capital-letter-spacing)] leading-[var(--subtile-regular-capital-line-height)] [font-style:var(--subtile-regular-capital-font-style)]">
            Download The App And Begin Your Verified Journey With Rinfie Now.
          </p>
        </div>

        <img
          className="absolute top-[95px] left-0 w-[950px] h-[705px] aspect-[1.44]"
          alt="Mask group"
          src="/landing/mask-group-5.png"
        />

        <div className="flex items-center justify-end gap-14 pl-0 pr-[100px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[400px] items-start gap-3 px-6 py-3 relative">
            <img
              className="h-full -top-5 -left-5 object-cover absolute w-full"
              alt="Bg"
              src="/landing/bg-1.svg"
            />

            <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#000000] text-4xl tracking-[1.08px] leading-[46px]">
              FOR ANDROID
            </div>

            <button className="all-[unset] box-border flex min-w-[168px] px-4 py-2.5 self-stretch w-full flex-[0_0_auto] rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-subtile-semi-capital font-[number:var(--subtile-semi-capital-font-weight)] text-[#fdfdfd] text-[length:var(--subtile-semi-capital-font-size)] text-center tracking-[var(--subtile-semi-capital-letter-spacing)] leading-[var(--subtile-semi-capital-line-height)] whitespace-nowrap [font-style:var(--subtile-semi-capital-font-style)]">
                Download Now
              </div>
            </button>

            <img
              className="relative w-64 h-64 aspect-[1]"
              alt="Qr code"
              src="/landing/qr-code.svg"
            />
          </div>

          <div className="flex flex-col w-[400px] items-start gap-3 px-6 py-3 relative">
            <img
              className="h-full -top-5 -left-5 object-cover absolute w-full"
              alt="Bg"
              src="/landing/bg-2.svg"
            />

            <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#000000] text-4xl tracking-[1.08px] leading-[46px]">
              FOR IOS
            </div>

            <button className="all-[unset] box-border flex min-w-[168px] px-4 py-2.5 self-stretch w-full flex-[0_0_auto] rounded-[99px] overflow-hidden bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] items-center justify-center gap-1.5 relative">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-subtile-semi-capital font-[number:var(--subtile-semi-capital-font-weight)] text-[#fdfdfd] text-[length:var(--subtile-semi-capital-font-size)] text-center tracking-[var(--subtile-semi-capital-letter-spacing)] leading-[var(--subtile-semi-capital-line-height)] whitespace-nowrap [font-style:var(--subtile-semi-capital-font-style)]">
                Download Now
              </div>
            </button>

            <img
              className="relative w-64 h-64 aspect-[1]"
              alt="Qr code"
              src="/landing/qr-code-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
