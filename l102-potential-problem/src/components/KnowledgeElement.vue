<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="onSelectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ["onSelectTopic"],
  props: ['id', 'topicName', 'description'],
};
</script>