import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { experience } from '../../constants';

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 640px) {
    display: flex;
    overflow-x: auto;
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 40px);
    padding-left: 25px;
    margin-left: -25px;
  }
`;

const StyledTabButton = styled.button<{ isActive: boolean }>`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0px 20px 2px;
  border-left: 3px solid var(--lightest);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--primary)' : 'var(--light)')};
  font-size: 0.9rem;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 160px;
    padding: 0px 15px;
    border-left: 0px;
    border-bottom: 3px solid var(--lightest);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--primary-lightest);
  }
`;

const StyledHighlight = styled.div<{ activeTabId: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 3px;
  height: 42px;
  border-radius: 4px;
  background: var(--primary);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 640px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 160px;
    height: 4px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 160px));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 640px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  li {
    margin-bottom: 1rem;
  }
`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id="experience" className="mx-auto max-w-[700px] px-[15px] mb-8">
      <div className="h-24" />

      <h5 className="font-bold mb-6 text-2xl">Where I&apos;ve Worked 💼</h5>
      <h2 className="numbered-heading"></h2>
      <div className="block sm:flex">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {experience.map((job, i) => {
            return (
              <StyledTabButton
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                // ref={el => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}
              >
                <span>{job.company}</span>
              </StyledTabButton>
            );
          })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {experience.map((job, i) => {
            const { title, company, range, tasks } = job;

            return (
              <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade-in">
                <StyledTabPanel
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? 0 : -1}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3 className="font-bold text-lg">
                    <span>{title}</span>
                    <span className="text-primary-regular">
                      &nbsp;@&nbsp;
                      <a href={'/'} className="hover:underline">
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className="text-sm mb-6 text-gray-500">{range}</p>

                  <ul className="text-sm">
                    {tasks.map((task) => (
                      <li>{task}</li>
                    ))}
                  </ul>
                </StyledTabPanel>
              </CSSTransition>
            );
          })}
        </StyledTabPanels>
      </div>
    </section>
  );
};

export default Experience;
