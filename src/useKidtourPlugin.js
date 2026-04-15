/**
 * kidtour 插件通信工具
 * 插件协议 v1.0
 *
 * 使用方式（示例）：
 *   import { sendComplete } from './useKidtourPlugin.js'
 *
 *   // 训练型（答题/计分）
 *   sendComplete({ passed: true, score: 90 })
 *
 *   // 创作型（作品导出）
 *   sendComplete({ passed: true, workUrl: 'https://...' })
 *
 *   // 最简调用（只上报是否通关）
 *   sendComplete({ passed: true })
 */

/**
 * 向平台宿主上报游戏完成结果
 * @param {object} options
 * @param {boolean} options.passed   - 必填：是否通关/完成
 * @param {number}  options.score    - 可选：得分（0~100），无评分传 null
 * @param {string}  options.workUrl  - 可选：作品 URL（图片/音频），非创作类传 null
 */
export const sendComplete = ({ passed, score = null, workUrl = null }) => {
  // 参数校验
  if (typeof passed !== "boolean") {
    console.error("[kidtour-plugin] sendComplete 错误：passed 必须是 boolean");
    return;
  }

  const message = {
    source: "kidtour-plugin", // 固定，不要修改
    type: "COMPLETE", // 固定，不要修改
    payload: {
      passed,
      score,
      workUrl,
    },
  };

  window.parent.postMessage(message, "*");
  console.log("[kidtour-plugin] 已上报结果：", message.payload);
};
