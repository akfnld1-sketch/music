// src/components/CoursesSection.tsx

import React, { useState, useRef, useEffect } from "react";

type Track = {
  title: string;
  filename: string; // music 레포에 올라간 실제 파일명과 100% 같게
  lyricsLines?: string[];
};

// 🔊 jsDelivr CDN: GitHub music 레포 mp3 스트리밍 경로
const GITHUB_MUSIC_BASE =
  "https://cdn.jsdelivr.net/gh/akfnld1-sketch/music@main/";

const makeSrc = (filename: string) =>
  GITHUB_MUSIC_BASE + encodeURIComponent(filename);

const TRACKS: Track[] = [
  {
    title: "Anthem for Us (Holiday Oath)",
    filename: "Anthem for Us (Holiday Oath).mp3",
    lyricsLines: [],
  },
  {
    title: "Jingle Step Parade",
    filename: "Jingle Step Parade.mp3",
    lyricsLines: [],
  },
{
    title: "Late Train Home (Holiday Line)",
    filename: "Late Train Home (Holiday Line).mp3",
    lyricsLines: [],
  },
  {
    title: "Little Argument, Soft Return",
    filename: "Little Argument, Soft Return.mp3",
    lyricsLines: [],
  },
  {
    title: "First Snow Coats",
    filename: "First Snow Coats.mp3",
    lyricsLines: [],
  },
  {
    title: "Bench by the River",
    filename: "Bench by the River.mp3",
    lyricsLines: [],
  },
  {
    title: "First Photo",
    filename: "First Photo.mp3",
    lyricsLines: [],
  },
  {
    title: "First Christmas, Same Us",
    filename: "First Christmas, Same Us.mp3",
    lyricsLines: [],
  },
  {
    title: "Candle Chorus",
    filename: "Candle Chorus.mp3",
    lyricsLines: [],
  },
  {
    title: "Red Scarf, Slow Steps",
    filename: "Red Scarf, Slow Steps.mp3",
    lyricsLines: [],
  },
  {
    title: "Gingerbread Promise",
    filename: "Gingerbread Promise.mp3",
    lyricsLines: [],
  },
  {
    title: "Mistletoe Timing",
    filename: "Mistletoe Timing.mp3",
    lyricsLines: [],
  },
  {
    title: "Sleighbell Heartbeat",
    filename: "Sleighbell Heartbeat.mp3",
    lyricsLines: [],
  },
  {
    title: "Snowfall Taxi",
    filename: "Snowfall Taxi.mp3",
    lyricsLines: [],
  },
  {
    title: "Evergreen You",
    filename: "Evergreen You.mp3",
    lyricsLines: [],
  },
  {
    title: "Stocking Letters",
    filename: "Stocking Letters.mp3",
    lyricsLines: [],
  },
  {
    title: "December Postcard",
    filename: "December Postcard.mp3",
    lyricsLines: [],
  },
];

const CoursesSection: React.FC = () => {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatAll, setRepeatAll] = useState(false);

  const [showLyrics, setShowLyrics] = useState(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = queue[currentIndex] || null;

  // 현재 큐(선택) 재계산
  const buildQueue = (): Track[] => {
    if (!selectedTitles.length) return TRACKS;
    return TRACKS.filter((t) => selectedTitles.includes(t.title));
  };

  // 트랙 바뀔 때 오디오 src 세팅
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    const audio = audioRef.current;
    audio.src = makeSrc(currentTrack.filename);
    audio.load();

    setCurrentLyricIndex(0);

    if (isPlaying) {
      audio
        .play()
        .then(() => {})
        .catch(() => setIsPlaying(false));
    }
  }, [currentTrack?.filename]); // eslint-disable-line react-hooks/exhaustive-deps

  // 가사 자동 진행 (곡 길이 비율 기반, 두 줄 표시)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack || !currentTrack.lyricsLines?.length) return;

    const handle = () => {
      const lines = currentTrack.lyricsLines!;
      if (!audio.duration || !lines.length) return;

      const ratio = audio.currentTime / audio.duration;
      let idx = Math.floor(ratio * lines.length);
      if (idx < 0) idx = 0;
      if (idx >= lines.length) idx = lines.length - 1;
      setCurrentLyricIndex(idx);
    };

    audio.addEventListener("timeupdate", handle);
    audio.addEventListener("loadedmetadata", handle);
    return () => {
      audio.removeEventListener("timeupdate", handle);
      audio.removeEventListener("loadedmetadata", handle);
    };
  }, [currentTrack]);

  const handlePlayAll = () => {
    if (!TRACKS.length) return;
    setSelectedTitles(TRACKS.map((t) => t.title));
    setQueue(TRACKS);
    setCurrentIndex(0);
    setIsPlaying(true);
    setShowLyrics(true);
  };

  const handleClearSelection = () => {
    setSelectedTitles([]);
    setQueue([]);
    setCurrentIndex(0);
    setIsPlaying(false);
    setCurrentLyricIndex(0);
  };

  const handleClickTrack = (track: Track) => {
    const list = buildQueue();
    const idx = list.findIndex((t) => t.title === track.title);

    if (idx === -1) {
      setQueue([track]);
      setCurrentIndex(0);
    } else {
      setQueue(list);
      setCurrentIndex(idx);
    }

    setIsPlaying(true);
    setShowLyrics(true);
  };

  const handleToggleSelect = (title: string) => {
    setSelectedTitles((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!queue.length) {
      // 아무 것도 없으면 전곡 재생
      handlePlayAll();
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleEnded = () => {
    if (!queue.length) return;
    const last = currentIndex >= queue.length - 1;

    if (!last) {
      setCurrentIndex((i) => i + 1);
    } else if (repeatAll) {
      setCurrentIndex(0);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="playlists"
      className="bg-gray-100 text-gray-900 py-20 border-t border-gray-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Emotion Gap 플레이리스트
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          GitHub에 저장된 Emotion Gap AI 트랙을 스트리밍으로 재생합니다.
          전곡 듣기, 커스텀 선택, 반복 재생, 가사 오버레이까지 한 번에 즐겨보세요.
        </p>

        {/* 컨트롤 버튼들 */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <button
            onClick={handlePlayAll}
            className="px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-semibold hover:bg-emerald-400 transition"
          >
            전곡 듣기 + 전체 선택
          </button>
          <button
            onClick={handleClearSelection}
            className="px-4 py-2 rounded-full bg-white text-gray-700 text-xs font-semibold border border-gray-300 hover:bg-gray-100 transition"
          >
            전체 해제
          </button>
          <button
            onClick={() => setRepeatAll((v) => !v)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
              repeatAll
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            반복 재생 {repeatAll ? "ON" : "OFF"}
          </button>
          <button
            onClick={() => setShowLyrics((v) => !v)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
              showLyrics
                ? "bg-emerald-500 text-black border-emerald-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            가사 보기
          </button>
          <span className="text-[10px] text-gray-500">
            ✅ 체크: 선택 / 🎵 제목 클릭: 해당 곡부터 재생 / 검은 가사창은 하단에 표시
          </span>
        </div>

        {/* 트랙 리스트 */}
        <div className="bg-white p-5 rounded-2xl border border-emerald-500/60 shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-3">
            Global Winter & Holiday Collection
          </h3>
          <div className="space-y-3">
            {TRACKS.map((track, i) => {
              const checked = selectedTitles.includes(track.title);
              const active =
                currentTrack && currentTrack.title === track.title && isPlaying;

              let row =
                "bg-gray-50 border-gray-200 hover:bg-white hover:border-emerald-300";
              if (checked && !active) {
                row =
                  "bg-emerald-50 border-emerald-300 hover:bg-white hover:border-emerald-400";
              }
              if (active) {
                row = "bg-white border-emerald-500 shadow-sm";
              }

              return (
                <div
                  key={track.title}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${row}`}
                  onClick={() => handleClickTrack(track)}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleToggleSelect(track.title);
                    }}
                    className="w-4 h-4 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm font-semibold">
                      {i + 1}. {track.title}
                    </span>
                    <span className="text-[9px] text-gray-500">
                      클릭 시 이 곡부터 재생 / 선택해서 나만의 플레이리스트 구성
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 플레이어 */}
        <div className="mt-4 bg-white p-4 rounded-2xl border border-gray-300 shadow-sm">
          <div className="text-xs text-gray-600 mb-2">
            Now Playing:&nbsp;
            <span className="font-semibold text-emerald-600">
              {currentTrack ? currentTrack.title : "선택된 트랙 없음"}
            </span>
          </div>
          <audio
            ref={audioRef}
            onEnded={handleEnded}
            controls
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            className="w-full"
          >
            브라우저에서 오디오를 지원하지 않습니다.
          </audio>
          <div className="flex justify-end mt-1">
            <button
              onClick={handlePlayPause}
              className="text-[10px] px-3 py-1 border border-gray-400 rounded-full text-gray-700 hover:text-black hover:border-black transition"
            >
              {isPlaying ? "일시정지" : "재생 / 이어듣기"}
            </button>
          </div>
        </div>
      </div>

      {/* 🔻 검은 네모 가사 오버레이 (두 줄, 위 흰색/아래 회색) */}
      {showLyrics && currentTrack && currentTrack.lyricsLines?.length ? (
        <div
          className="
            fixed bottom-4 left-1/2 -translate-x-1/2
            w-[92%] max-w-2xl
            bg-black/80
            rounded-2xl px-6 py-4
            flex flex-col justify-center
            shadow-2xl
            z-50
          "
        >
          <div className="text-[10px] text-emerald-300 mb-2 text-center">
            가사 · {currentTrack.title}
          </div>
          {(() => {
            const lines = currentTrack.lyricsLines!;
            const currentLine = lines[currentLyricIndex] || "";
            const nextLine = lines[currentLyricIndex + 1] || "";
            return (
              <>
                <div className="text-xs md:text-sm font-semibold text-white mb-1">
                  {currentLine}
                </div>
                <div className="text-[10px] md:text-xs text-gray-400">
                  {nextLine}
                </div>
              </>
            );
          })()}
        </div>
      ) : null}
    </section>
  );
};

export default CoursesSection;