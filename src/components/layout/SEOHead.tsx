import { Helmet } from 'react-helmet-async'
import { allSchemas } from '@/lib/schemas'

export default function SEOHead() {
  return (
    <Helmet>
      {/* JSON-LD Structured Data – all schemas bundled */}
      <script type="application/ld+json">
        {JSON.stringify(allSchemas)}
      </script>
    </Helmet>
  )
}
