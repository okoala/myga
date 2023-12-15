import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  colorfull: css`
    width: 100%;
    height: 100%;
  `,
  colorfull1: css`
    background: radial-gradient(80.99% 100% at 50% 0%, #00ff0a 0%, #36008e 100%),
      radial-gradient(50% 123.47% at 50% 50%, #efe7c8 0%, #36008e 100%),
      linear-gradient(301.28deg, #ff006b 0%, #48dd9e 100%),
      linear-gradient(294.84deg, #5a60e4 0%, #d30000 100%),
      linear-gradient(52.29deg, #000000 0%, #00ff85 100%),
      radial-gradient(100% 138.69% at 100% 0%, #0007a5 0%, #ff7a00 100%),
      radial-gradient(70.41% 100% at 50% 0%, #d5b300 0%, #2200aa 100%);
    background-blend-mode: screen, screen, lighten, overlay, lighten, difference,
      normal;
  `,
  colorfull2: css`
    background: linear-gradient(115.58deg, #00fc19 0%, #1700a4 100.22%),
      radial-gradient(92.72% 100% at 50% 0%, #ebffcb 0%, #651200 100%),
      radial-gradient(92.72% 100% at 50% 0%, #faff00 0%, #820000 100%),
      radial-gradient(109.21% 213.32% at 100% 0%, #ff4d00 0%, #00c2ff 100%),
      linear-gradient(127.43deg, #d50000 0%, #7856ff 100%);
    background-blend-mode: lighten, overlay, lighten, screen, normal;
  `,
  colorfull3: css`
    background: linear-gradient(
      110deg,
      #ffd9e8 4%,
      #ffd9e8 40%,
      #de95ba calc(40% + 1px),
      #de95ba 50%,
      #7f4a88 calc(50% + 1px),
      #7f4a88 70%,
      #4a266a calc(70% + 1px),
      #4a266a 100%
    );
  `,
  colorfull4: css`
    background: linear-gradient(180deg, #fdeddb 0%, #241e00 100%),
      linear-gradient(195.81deg, #00aed5 6.94%, #aa0085 81.59%),
      radial-gradient(111% 111% at 74.29% -11%, #87a900 0%, #ff0000 100%),
      linear-gradient(127.43deg, #b7d500 0%, #2200aa 100%);
    background-blend-mode: overlay, difference, difference, normal;
  `,
  colorfull5: css`
    background: linear-gradient(
      288deg,
      #ffb6b9 0%,
      #ffb6b9 35%,
      #fae3d9 calc(35% + 1px),
      #fae3d9 45%,
      #bbded6 calc(45% + 1px),
      #bbded6 65%,
      #61c0bf calc(65% + 1px),
      #61c0bf 100%
    );
  `,
  colorfull6: css`
    background: radial-gradient(
        ellipse farthest-side at 76% 77%,
        rgba(245, 228, 212, 0.25) 4%,
        rgba(255, 255, 255, 0) calc(4% + 1px)
      ),
      radial-gradient(
        circle at 76% 40%,
        #fef6ec 4%,
        rgba(255, 255, 255, 0) 4.18%
      ),
      linear-gradient(135deg, #ff0000 0%, #000036 100%),
      radial-gradient(
        ellipse at 28% 0%,
        #ffcfac 0%,
        rgba(98, 149, 144, 0.5) 100%
      ),
      linear-gradient(
        180deg,
        #cd6e8a 0%,
        #f5eab0 69%,
        #d6c8a2 70%,
        #a2758d 100%
      );
    background-blend-mode: normal, normal, screen, overlay, normal;
  `,
  colorfull7: css`
    background: linear-gradient(125deg, #ffffff 0%, #000000 100%),
      linear-gradient(
        200deg,
        #ffd9e8 0%,
        #ffd9e8 50%,
        #de95ba calc(50% + 1px),
        #de95ba 60%,
        #7f4a88 calc(60% + 1px),
        #7f4a88 75%,
        #4a266a calc(75% + 1px),
        #4a266a 100%
      ),
      linear-gradient(
        113deg,
        #ffd9e8 0%,
        #ffd9e8 40%,
        #de95ba calc(40% + 1px),
        #de95ba 50%,
        #7f4a88 calc(50% + 1px),
        #7f4a88 70%,
        #4a266a calc(70% + 1px),
        #4a266a 100%
      );
    background-blend-mode: overlay, overlay, normal;
  `,
}));

export { useStyles };
