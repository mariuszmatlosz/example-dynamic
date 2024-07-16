<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

global $post;

$heading = $attributes['heading'];
$text = $attributes['text'];
$image_url = $attributes['imageUrl'];
$image_link = $attributes['imageLink'];
$current_time = date('H:i, F d Y');
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="testblock">
		<div class="testblock__left">
			<a href="<?php echo esc_url($image_link); ?>">
				<img src="<?php echo esc_url($image_url); ?>" alt="">
			</a>
		</div>
		<div class="testblock__right">
			<h2><?php echo esc_html($heading); ?></h2>
			<p><?php echo wp_kses_post($text); ?></p>
		</div>
		<div class="testblock__footer">
			&copy; <?php echo $current_time; ?>
		</div>
	</div>
</div>
