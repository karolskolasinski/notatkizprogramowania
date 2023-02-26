import React from 'react';
import cover from '../../../img/cover/cover-template-engines.webp';

const EnglishLevels = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Levels</h1>
                <h3>Level B1 - Low-Intermediate – Intermediate</h3>
                <ul>
                    <li>Can understand simple texts on familiar/every-day subjects and discuss them</li>
                    <li>Can understand enough native spoken language to hold a conversation, and thus can communicate
                        within the scope of every-day situations (school, work, travel to the country where the language
                        is spoken, asking for directions, etc.)
                    </li>
                    <li>Can create simple texts on familiar/every-day subjects</li>
                    <li>Efficiently communicates with other foreign speakers of the language, within the scope of
                        everyday, familiar subjects
                    </li>
                    <li>Able to express own views, explain simple concepts and inform of plans/past events</li>
                </ul>

                <hr />

                <h3>Level B2 - Upper-Intermediate</h3>
                <ul>
                    <li>Can understand more complicated texts with some abstract terms, including texts in their
                        professional field, and discuss them in more detail
                    </li>
                    <li>Speaks with a good degree of fluency, able to hold a spontaneous conversation with both native
                        speakers and other language users on various subjects
                    </li>
                    <li>Able to create texts on wider range of topics, with some abstract expressions/idioms included
                    </li>
                    <li>Expresses own views with more complex reasoning, can debate various subjects whilst analysing
                        information
                    </li>
                    <li>Can deal with business situations on a good level, usually has a good knowledge of technical
                        vocabulary within their professional field
                    </li>
                </ul>

                <hr />

                <h3>Level C1 - Advanced</h3>
                <ul>
                    <li>Understands texts on wide range of subjects, both in their professional field and outside of it;
                        able to draw conclusions and analyse information; can discuss text/ideas freely using abstract
                        terms and understanding the implicit meaning
                    </li>
                    <li>Speaks fluently, without pausing to search for a required phrase or word, using broad vocabulary
                    </li>
                    <li>Has a good knowledge of idioms and every-day expressions</li>
                    <li>Can create accurate, thorough texts on complex issues for both professional and personal
                        purposes
                    </li>
                    <li>Able to explain own views, plans, professional matters using longer, more complicated sentences
                    </li>
                </ul>

                <hr />

                <h3>Level C2 - Proficient</h3>
                <ul>
                    <li>Can understand, analyse and discuss any text or a spoken word, with an excellent knowledge of
                        technical vocabulary in their professional field
                    </li>
                    <li>Speaks with complete fluency, able to hold conversation with no restrains on any subject, using
                        rich, precise and complex vocabulary
                    </li>
                    <li>Has an excellent knowledge of every-day expressions, idioms, proverbs, and cultural nuances
                        (e.g. understatement)
                    </li>
                    <li>Can create any text using abstract/advanced vocabulary, analysing and summarising information
                        obtained from various sources
                    </li>
                </ul>
            </article>
        </>
    );
};

export default EnglishLevels;
