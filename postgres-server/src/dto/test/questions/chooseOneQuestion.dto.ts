export class ChooseOneQuestionDTO {
  text: string;
  option_a: string;
  option_b: string;
  option_c?: string;
  option_d?: string;
  option_e?: string;
  option_f?: string;
  answer: string;
  point_value: number;
  test_id: number;
}
