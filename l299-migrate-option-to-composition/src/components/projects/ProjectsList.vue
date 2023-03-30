<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
import { ref, computed, watch, toRefs } from 'vue';
export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    // All props could be watched here because there is only one prop
    // in this particular component. But if there were more, and you
    // do not want to watch them all, this is the way to do it.
    // Transform one particular property to the Ref and then watch it.
    const { user } = toRefs(props);
    watch(user, () => {
      enteredSearchTerm.value = '';
    });

    const hasProjects = computed(() => {
      return props.user.projects && availableProjects.value.length > 0;
    });

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects;
    });

    return { enteredSearchTerm, updateSearch, hasProjects, availableProjects };
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