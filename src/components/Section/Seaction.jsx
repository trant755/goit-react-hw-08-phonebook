import PropTypes from 'prop-types';

import * as SC from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SC.Section>
      <SC.SectionBar>
        <SC.Title>{title}</SC.Title>
      </SC.SectionBar>
      <SC.SectionContent>{children}</SC.SectionContent>
    </SC.Section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
