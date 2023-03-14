<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <h2 v-if="isLoading">Loading data...</h2>
      <ul v-else-if="results && results.length !== 0">
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
      <h3 v-else>No data found.</h3>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch("https://vue-http-demo-d9ba8-default-rtdb.europe-west1.firebasedatabase.app/surveys.json")
        .then(response => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
        }).then(data => {
          console.log(data);
          const results = [];
          for (const id in data) {
            results.push({ id: id, name: data[id].name, rating: data[id].rating });
          }
          this.results = results;
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>