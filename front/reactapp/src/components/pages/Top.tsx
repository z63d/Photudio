import { Box, Typography } from "@mui/material";
import { FC, memo } from "react";

export const Top: FC = memo(() => (
	<Box margin="auto">
		<Box>
			<Typography>Concept</Typography>
			<Typography align="center">
				”Photudio”は写真を撮ってくれる人を気軽に探すことができるサービスです。
			</Typography>
			<Typography align="center">
				SNSを通した多くの人との出会いをサポートします。
			</Typography>
		</Box>
		<Box>
			<Typography>How to use</Typography>
			<Typography align="center">まずはアカウントを登録しましょう</Typography>
		</Box>
	</Box>
));
