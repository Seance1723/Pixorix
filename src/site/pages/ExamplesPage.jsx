import { useMemo, useState } from 'react';
import { exampleCategories, examples } from '../content/examples';
import { PageHeroBanner } from '../components/marketing/PageHeroBanner';
import { ExampleCard } from '../components/marketing/ExampleCard';
import { useReveal } from '../hooks/useReveal';

export function ExamplesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const revealRef = useReveal('[data-reveal]');

  const filteredExamples = useMemo(() => {
    if (activeCategory === 'All') {
      return examples;
    }

    return examples.filter((example) => example.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="content-page" ref={revealRef}>
      <PageHeroBanner
        eyebrow="Examples"
        title="A showcase of Pixorix-ready screens and interface patterns"
        description="Browse categorized demos that show how the framework behaves across marketing, applications, forms, overlays, and premium system surfaces."
        meta={[
          { value: '12 demos', label: 'Initial showcase' },
          { value: '5 categories', label: 'Browse by use case' },
          { value: 'Responsive', label: 'Built for all screens' }
        ]}
      />

      <div className="filter-bar" data-reveal>
        {exampleCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip${activeCategory === category ? ' is-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="site-grid site-grid--three">
        {filteredExamples.map((example) => (
          <ExampleCard key={example.slug} example={example} />
        ))}
      </div>
    </div>
  );
}
