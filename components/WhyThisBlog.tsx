import React from 'react';

/**
 * 이 블로그를 왜 만들었는지 적는 자리.
 *
 * 글 목록 위에 둔다. 처음 온 사람이 글을 읽기 전에 왜 쓰는지를 먼저 보게 하려는 것이다.
 *
 * 발언 인용은 "영상에서 들었다"는 형태로만 쓴다. 옮겨 적는 과정에서 뜻이 달라질 수 있고,
 * 실존 인물의 말이라 단정해서 쓸 근거가 나에게는 없다. 대신 원본 링크를 같이 둬서
 * 읽는 사람이 직접 확인할 수 있게 한다.
 */
const SOURCE_URL = 'https://www.youtube.com/shorts/rrYsvPQwUh4';

const WhyThisBlog: React.FC = () => {
  return (
    <section aria-labelledby="why-heading" className="py-16 border-y border-zinc-800/60">
      <div className="max-w-3xl">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Why I write
        </p>

        <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-snug">
          이 블로그를 만든 계기
        </h2>

        <div className="space-y-5 text-zinc-400 text-[17px] leading-[1.85]">
          <p>
            하이닉스 주주가 되고 나서 SK 영상을 자주 찾아봤다. 그랬더니 알고리즘이 눈치를
            챘는지, 요즘은 쇼츠에 최태원 회장이 자꾸 나온다.
          </p>

          <p>
            그러다 하나에 걸렸다. AI가 발전할수록 사람이 생각을 안 하게 된다고, 생각을 AI한테
            외주 준다고 했다.
          </p>

          <p>
            <strong className="text-zinc-200 font-semibold">뜨끔했다.</strong> 그 말을 듣던
            순간에도 나는 AI 켜놓고 코딩하고 있었으니까.
          </p>

          <p>
            그런데 좀 억울하기도 했다. 서버가 네 대인 걸 몰라서 며칠을 엉뚱한 데 팠고, 락을
            걸었는데 왜 안 걸리냐고 커넥션 풀까지 뜯어봤고, 끊긴 게 370개인지 727개인지
            세어보겠다고 도구까지 만들었다. 그거 AI가 대신 고민해준 거 아니다. 내가 밤새 한 거다.
          </p>

          <p>
            문제는 그걸 아무 데도 안 적어놨다는 거다. 머릿속에만 있는 건 세 달이면 증발한다.
            작년에 뭘 어떻게 고쳤는지 벌써 가물가물한 걸 보면 이미 늦은 것 같기도 하고.
          </p>

          <p>
            그래서 여기다 적기로 했다. 생각을 외주 주지 말라는 영상을 보고 AI랑 같이 블로그를
            쓰는 게 좀 웃기긴 한데, 문장 다듬는 건 맡겨도{' '}
            <strong className="text-zinc-200 font-semibold">
              삽질은 내가 했고, 무엇을 포기하고 무엇을 택할지도 내가 정했다.
            </strong>{' '}
            그건 외주 안 준다.
          </p>
        </div>

        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-emerald-500/40 hover:bg-zinc-900"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-zinc-200 group-hover:text-white">
              뜨끔하게 만든 그 영상
            </span>
            <span className="block text-xs text-zinc-500">
              보시면 아마 같이 뜨끔하실 거예요
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default WhyThisBlog;
