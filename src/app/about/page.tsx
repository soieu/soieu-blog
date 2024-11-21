import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center ">
        <div className="border border-black mt-5 xl:mt-0 xl:mr-2 p-5 w-full">
          <p className="text-2xl xl:text-4xl pb-5">
            안녕하세요 ! 개발자 <span className="font-bold">박소영</span>입니다.
          </p>
          <p className="text-lg xl:text-2xl bg-black text-white p-2">
            소통을 통한 학습을 좋아하는 개발자입니다.
          </p>
          <p className="text-base xl:text-lg">
            학습할 때 직접 스터디를 조직하고 이끌며, 서로의 지식을 공유하는
            과정을 중요하게 생각합니다. 저는 다양한 관점을 배우고, 이를 통해
            더욱 깊이 있는 이해를 쌓는 것을 즐깁니다. 특히, 스터디에서의 논의와
            피드백을 통해 동료들과 함께 성장하며 개발에 대한 통찰을 넓혀가는 데
            큰 보람을 느낍니다.
          </p>
          <p className="text-base xl:text-lg mt-5 bg-black text-white p-2">
            백엔드를 중심으로, 프론트엔드 학습도 진행하고있습니다.
          </p>
          <p className="text-base xl:text-lg">
            스프링 프레임워크를 중점으로 프로젝트를 구현하며, 프론트엔드와의
            원활한 소통을 위해 Next.js를 학습하고 있습니다. 백엔드와 프론트엔드
            간의 효율적인 협업은 서비스 개발의 중요한 요소라고 생각하며, 이를
            위해 기술적 이해를 넓히고 있습니다.
          </p>
          <p className="text-base xl:text-lg mt-5 bg-black text-white p-2">
            개발이란 작게는 나를 위한 것, 더 나아가서는 모두를 위한 것이라는
            생각을 가지고 있습니다.
          </p>
          <p className="text-base xl:text-lg">
            제가 개발하는 모든 서비스와 기능은 사용자에게 실질적인 가치를
            제공하는것이 목표입니다. 이러한 생각은 단순한 기술 구현을 넘어, 더
            나은 삶을 만들어가는 데 기여할 수 있는 개발에 대한 원동력이 되고
            있습니다. 앞으로도 이러한 생각을 바탕으로 작게는 개인의 일상을,
            크게는 모두의 일상을 변화시킬 수 있는 개발자로 성장하고자 합니다.
          </p>
          <p className="text-base xl:text-lg"></p>
          <p className="text-base xl:text-lg"></p>
          <p className="text-base xl:text-lg"></p>
        </div>
        <div className="border border-black p-2">
          <div className=" bg-[url('/profile-image.png')] bg-cover bg-center h-80 w-80">
            1
          </div>
          <div className="flex flex-row items-center mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-2 " />
            soieu9898@gmail.com
          </div>
          <div className="flex flex-row items-center mt-2">
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" />
            <Link href="https://github.com/soieu">
              https://github.com/soieu
            </Link>
          </div>
          <div className="flex flex-row items-cente mt-2">
            <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 mr-2" />
            <Link href="https://www.soieu.net">https://www.soieu.net</Link>
          </div>
        </div>
      </div>
      <div className="mt-5 border border-black p-5">
        <p className="text-4xl">Profile</p>
        <p className="mt-4">
          <span className="font-bold text-xl">
            방송통신대학교 통계·데이터과학과 재학
          </span>{" "}
          2024.03 ~ ing
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">
            한경대학교 컴퓨터공학과 졸업
          </span>{" "}
          2018.03 ~ 2024.02
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">
            클라우드 활용 Java 백엔드 개발자 양성과정
          </span>{" "}
          2024.05-2024.07
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl ">새싹풀스택프로젝트과정</span>{" "}
          2023.09 ~ 2024.01
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">신한DS금융SW아카데미</span>{" "}
          2023.02 ~ 2023.08
        </p>
      </div>
      <div className="mt-5 border border-black p-5">
        <p className="text-4xl">Work Experience</p>
        <p className="mt-4">
          <span className="font-bold text-xl">플래닝고 인턴</span> 2024.08 ~
          2024.11
        </p>
        <p className="mt-4">- 웹소켓을 이용한 실시간 데이터 전송 기능을 구현</p>
        <p className="mt-4">- redis, supabase 등 데이터베이스 기술 사용</p>
        <p className="mt-4">- slack API 연결을 통한 로그 관리 등</p>
      </div>
      <div className="mt-5 border border-black p-5">
        <p className="text-4xl">Skills</p>
        <p className="mt-4">
          <span className="font-bold text-xl">Languages : </span> Java, Kotlin,
          Javascript, Typescript, Python, C/C++
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">Frameworks : </span> Spring Boot,
          FastAPI, Next.js
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">Database / ORM : </span> MySQL,
          Oracle, Redis, JPA, queryDSL, MyBatis
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">Environments : </span> Linux, AWS
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">Tools/ DevOps : </span> Git,
          Maven, Gradle, Jira, IntelliJ, Eclipse, VS, VSC, Docker
        </p>
      </div>
      <div className="mt-5 border border-black p-5">
        <p className="text-4xl">Certificates</p>
        <p className="mt-4">
          <span className="font-bold text-xl">정보처리기사</span> 2024.09
        </p>
        <p className="mt-4">
          <span className="font-bold text-xl">SQLD</span> 2023.04
        </p>
      </div>
      <div className="my-5 border border-black p-5 ">
        <p className="text-4xl">Portfolio</p>
        <p className="mt-4">
          <Link href="https://docs.google.com/presentation/d/1VxPD3ltkxd215ddT1USfgUq3hRXivbPZ/edit?usp=drive_link&ouid=112660211322375920313&rtpof=true&sd=true">
            포트폴리오 링크
          </Link>
        </p>
      </div>
    </div>
  );
}
