interface TypedHeaderProps {
    id?: string;
    title: string;
    typedText: string;
}

//------------------------------------------------------------

export default function TypedHeader({ id, title, typedText }: TypedHeaderProps) {
    return (
        <div id={id} className="scroll-mt-16 group text-[2.4rem] font-bold text-gray-900 text-center tracking-tight leading-[1.2]">
            <div className="inline-block group-hover:hidden">
                <h1>
                    {title}
                </h1>
            </div>
            <div className="text-2xl align-bottom hidden group-hover:inline-block">
                <span className="inline-block overflow-hidden whitespace-nowrap w-0 animate-[typing_1s_steps(21,_end)_forwards]">
                    {typedText}
                </span>
                <span className="absolute font-light select-none animate-[blink_500ms_steps(2,_start)_infinite]">
                    _
                </span>
            </div>
        </div>
    );
}
