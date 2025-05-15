import { LETTERS } from "../../constants/letters";

export const LetterList = () => {
     return (
      <div className="max-w-5xl mx-auto p-6 pt-24 flex flex-wrap gap-2 justify-center">
        {LETTERS.map(letter => (
          <a
            key={letter}
            href={`/search.html?letter=${letter}`}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 text-center min-w-[2.5rem]"
          >
            {letter}
          </a>
        ))}
      </div>
    );
  };
