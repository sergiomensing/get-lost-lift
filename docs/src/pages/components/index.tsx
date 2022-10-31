import type { NextPage } from 'next';
import Link from 'next/link';

const components = [
  { slug: 'divider', label: 'Divider' },
  { slug: 'formfield', label: 'Form Field' },
  { slug: 'tag', label: 'Tag' },
];

const Components: NextPage = () => {
  return (
    <div>
      <h1>All Components</h1>
      <ul>
        {components.map((component) => (
          <li key={component.slug}>
            <Link href={`/components/${component.slug}`}>
              <a>{component.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Components;
