<template>
  <div class="wrapper">
    <h2>🎮 kidtour 插件模板</h2>
    <p class="desc">这里是游戏区域，开发者在此实现自己的互动逻辑</p>

    <div class="divider" />

    <!-- 训练型上报 -->
    <div class="section">
      <h3>训练型上报</h3>
      <p>passed + score，适合答题/计分类游戏</p>
      <button @click="onGameFinish(true, 90)">
        ✅ 完成并上报（通关，90分）
      </button>
      <button @click="onGameFinish(false, 30)" class="btn-fail">
        ❌ 完成并上报（未通关，30分）</button
      >6
    </div>

    <div class="divider" />

    <!-- 创作型上报 -->
    <div class="section">
      <h3>创作型上报</h3>
      <p>workUrl，适合绘画/涂色/音频类游戏</p>
      <button @click="onWorkExport('https://picsum.photos/400/300')">
        🎨 完成并上报（带作品URL）
      </button>
    </div>

    <!-- 上报状态提示 -->
    <div v-if="sentPayload" class="result">
      <strong>已发送 postMessage ↑</strong>
      <pre>{{ JSON.stringify(sentPayload, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { sendComplete } from "./useKidtourPlugin";

const sentPayload = ref(null);

// 训练型：游戏结束时调用
const onGameFinish = (passed, score) => {
  sendComplete({ passed, score });
};

// 创作型：作品导出后调用
const onWorkExport = (imageUrl) => {
  sendComplete({ passed: true, workUrl: imageUrl });
};
</script>

<style scoped>
.wrapper {
  max-width: 480px;
  margin: 60px auto;
  padding: 32px;
  font-family: sans-serif;
  border: 1px solid #ddd;
  border-radius: 16px;
}

h2 {
  margin: 0 0 8px;
}
.desc {
  color: #888;
  margin: 0 0 24px;
  font-size: 14px;
}

.divider {
  height: 1px;
  background: #eee;
  margin: 24px 0;
}

.section h3 {
  margin: 0 0 4px;
  font-size: 15px;
}
.section p {
  color: #888;
  font-size: 13px;
  margin: 0 0 12px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  border: none;
  border-radius: 8px;
  background: #4caf50;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
button:hover {
  opacity: 0.85;
}
.btn-fail {
  background: #f44336;
}

.result {
  margin-top: 24px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  font-size: 13px;
}
.result pre {
  margin: 8px 0 0;
  color: #333;
  white-space: pre-wrap;
}
</style>
