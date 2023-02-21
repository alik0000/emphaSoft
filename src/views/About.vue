<template>
  <AppSection tag="section">
    <template #head>
      <h1>О нас</h1>
    </template>
    <h3>
      Emphasoft - your dream team of top developers, designers and project managers
    </h3>
    <p>
      We are proud of the impeccable reputation in the professional
      community we’ve been earning on orders from world market leaders.
    </p>
    <p>
      We are specialists in the field of software development for startups,
      small, and medium-sized businesses. Tell us about your project, and we will
      select for you a ready-made team or specialists with relevant experience who can
      quickly launch your project and help you obtain your next round of investments.
    </p>
  </AppSection>
</template>

<script>
import AppSection from "../components/AppSection";
export default {
  name: "AppAbout",
  components: { AppSection },
}
</script>