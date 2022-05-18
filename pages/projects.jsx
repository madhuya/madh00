import Container from '../components/Container';
import Project from '../components/Projects';

export default function ProjectPage() {
  return (
    <Container
      title="Projects - Vivek Kumar"
      description="I develope Websites, Mobile Apps. Get in touch with me to know more."
    >
      <div className="justify-center">
        <Project />
      </div>
    </Container>
  );
}
