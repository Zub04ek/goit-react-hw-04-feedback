import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return <section>
        <Title>{title}</Title>
        <main>{children}</main>
    </section>
}

Section.propTypes = {
  title: PropTypes.string,
};