import { useMemo, useState } from 'react';
import TypedHeader from '@components/ui/TypedHeader';
import LogoSVG from '@components/ui/LogoSVG';
import { cn } from '@/lib/utils';

//------------------------------------------------------------

const TECH_STACK = [
    { id: 'react', name: 'React', link: 'https://react.dev', tags: ['react'] },
    { id: 'vue', name: 'Vue.js', link: 'https://vuejs.org', tags: ['vue'] },
    { id: 'nextjs', name: 'Next.js', link: 'https://nextjs.org', tags: ['react', 'nextjs'] },
    { id: 'nuxt', name: 'Nuxt', link: 'https://nuxt.com', tags: ['vue', 'nuxt'] },
    { id: 'docker', name: 'Docker', link: 'https://www.docker.com', tags: ['backend', 'devops'] },
    { id: 'postgresql', name: 'PostgreSQL', link: 'https://www.postgresql.org', tags: ['backend', 'database'] },
    { id: 'fastapi', name: 'FastAPI', link: 'https://fastapi.tiangolo.com', tags: ['fastapi'] },
    { id: 'django', name: 'Django', link: 'https://www.djangoproject.com', tags: ['django'] },
    { id: 'streamlit', name: 'Streamlit', link: 'https://streamlit.io', tags: ['streamlit'] },
    { id: 'tailwind', name: 'Tailwind CSS', link: 'https://tailwindcss.com', tags: ['tailwind'] },
    { id: 'python', name: 'Python', link: 'https://www.python.org', tags: ['python', 'django', 'fastapi', 'streamlit'] },
    { id: 'javascript', name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', tags: ['js', 'react', 'nextjs', 'vue', 'nuxt'] },
    { id: 'typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org', tags: ['js', 'react', 'nextjs', 'vue', 'nuxt'] },
    { id: 'html', name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', tags: ['html', 'markup'] },
    { id: 'css', name: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', tags: ['css', 'tailwind', 'markup'] },
    // { id: 'strapi', name: 'Strapi', link: 'https://strapi.io', tags: ['backend', 'cms'] },
];

const techMap = new Map(TECH_STACK.map(tech => [tech.id, tech]));

//------------------------------------------------------------

function findTechGroup(hoverId: string | null) {
    if (!hoverId) return [];

    const hoveredTech = techMap.get(hoverId);
    if (!hoveredTech || !hoveredTech.tags.length) return [hoverId];

    const hoveredTags = new Set(hoveredTech.tags);

    return TECH_STACK
        .filter(tech => tech.tags.some(tag => hoveredTags.has(tag)))
        .map(tech => tech.id);
}

export default function TechStack() {
    const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
    const relatedTechIds = useMemo(() => findTechGroup(hoveredTechId), [hoveredTechId]);

    return (
        <div className="mx-auto my-4 max-w-4xl px-6 lg:px-8 pb-16">
            <TypedHeader
                id="skills"
                title="Tech Stack"
                typedText="Frameworks and Languages"
            />
            <div className="flex justify-center pt-10">
                <ul role="list" className="grid grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8">
                    {TECH_STACK.map(tech => {
                        const isRelated = relatedTechIds.includes(tech.id);
                        const isDimmed = hoveredTechId && !isRelated;

                        return (
                            <li key={tech.id} className="relative bg-white">
                                <a
                                    className={cn(
                                        'flex justify-center transition-all ease-in-out duration-300',
                                        {
                                            'scale-125': isRelated,
                                            'opacity-30': isDimmed,
                                            'hover:scale-125': hoveredTechId === null
                                        }
                                    )}
                                    onMouseEnter={() => setHoveredTechId(tech.id)}
                                    onMouseLeave={() => setHoveredTechId(null)}
                                    href={tech.link}
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label={`Visit the official ${tech.name} website`}
                                >
                                    <LogoSVG name={tech.name} wh={1.75} scale={1.25} />
                                </a>
                                <p className="pointer-events-none mt-2 block truncate text-xs sm:text-sm font-medium text-gray-900 text-center">
                                    {tech.name}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
