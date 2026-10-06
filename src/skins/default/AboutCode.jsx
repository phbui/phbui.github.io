import { Fragment, useState } from "react";
import ALink from "./ALink";
import { files } from "../../assets";
import {
  profile,
  education,
  industry,
  research,
  community,
  publications,
  honors,
  contact,
  yearRange,
} from "../../content";

// A segment is a plain string or { text, href }.
const Segments = ({ items }) =>
  (Array.isArray(items) ? items : [items]).map((seg, k) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <a key={k} href={seg.href}>
        <ALink text={seg.text} />
      </a>
    )
  );

const Linked = ({ href, text, download }) => (
  <a href={href} download={download}>
    <ALink text={text} />
  </a>
);

// "  const name = () => {  return [ ... ];  };"
// Collapsed by default. The name is the toggle. Closed, the body prints as "[...]".
const ArrayBlock = ({ name, pad = "", children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  return (
    <>
      <pre>
        {" "}
        {"  const "}
        <span
          className="arrayToggle"
          role="button"
          tabIndex={0}
          aria-expanded={open}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          }}
        >
          {name}
        </span>
        {" = () => {" + (open ? pad : "")}
        {open ? "" : " [...] };"}
      </pre>
      {open && (
        <>
          <pre> {"    return ["}</pre>
          {children}
          <pre> {"    ];"}</pre>
          <pre> {"  };"}</pre>
        </>
      )}
    </>
  );
};

const ExperienceLines = ({ list, lastComma }) =>
  list.map((e, i) => (
    <pre key={e.id}>
      {" "}
      {"      {"}
      {e.aboutUrl ? <Linked href={e.aboutUrl} text={e.aboutLabel} /> : <ALink text={e.aboutLabel} />}
      {": '"}
      <Segments items={e.about} />
      {"'}" + (i < list.length - 1 || lastComma ? "," : "")}
    </pre>
  ));

export const AboutCode = () => (
  <>
    <pre>{`const About = (${profile.aboutVar}) => {`}</pre>
    {profile.documents.map((d) => (
      <pre key={d.id}>
        {`  const ${d.id} = fetch('`}
        <Linked href={files[d.file]} text={d.label} download={d.download} />
        {"');"}
      </pre>
    ))}
    {profile.pages.map((p) => (
      <pre key={p.id}>
        {`  const ${p.id} = fetch('`}
        <Linked href={p.href} text={p.label} />
        {"');"}
      </pre>
    ))}
    {education.map((ed, i) => (
      <pre key={ed.id}>
        {i === 0 ? "\n" : ""}
        {`  let ${ed.aboutVar} = '`}
        <Linked href={ed.degreeUrl} text={ed.degreeShort} />
        {" @ "}
        <Linked href={ed.schoolUrl} text={ed.school} />
        {` (${yearRange(ed.start, ed.end)})';`}
      </pre>
    ))}
    <br></br>
    <ArrayBlock name="industry_experience" pad="           ">
      <ExperienceLines list={industry} lastComma={false} />
    </ArrayBlock>
    <br></br>
    <ArrayBlock name="research_experience">
      <ExperienceLines list={research} lastComma={true} />
    </ArrayBlock>
    <br></br>
    <ArrayBlock name="community_experience">
      <ExperienceLines list={community} lastComma={true} />
    </ArrayBlock>
    <br></br>
    <ArrayBlock name="publications_presentations">
      {publications.map((pub) => (
        <Fragment key={pub.id}>
          {pub.lines.map((line, j) => (
            <pre key={j}>
              {j === 0 ? "      {'" : "        "}
              <Segments items={line} />
              {j === pub.lines.length - 1 ? "'}," : ""}
            </pre>
          ))}
          <br></br>
        </Fragment>
      ))}
    </ArrayBlock>
    <br></br>
    <ArrayBlock name="honors_awards">
      {honors.map((h) => (
        <pre key={h.id}>
          {"      '"}
          {`${h.title}, ${h.org}, ${h.date}`}
          {"',"}
        </pre>
      ))}
    </ArrayBlock>
    <pre>{"}"}</pre>
  </>
);

export const ContactCode = () => (
  <>
    <pre>{"const Contact = {            "} </pre>
    {contact.map((c, i) => (
      <pre key={c.key}>
        {`  {${c.key}: `}
        <Linked href={c.href} text={c.text} />
        {"}" + (i < contact.length - 1 ? "," : "")}
      </pre>
    ))}
    <pre>{"}"}</pre>
  </>
);
